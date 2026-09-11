import {
  applyCachedWebGLState,
  disableGradientBackground,
  enableGradientBackground
} from './background'
import { getCachedWebGLSupport, hasShownWarning, setCachedWebGLSupport } from './cache'
import { detectGraphicsAcceleration, getRendererInfo } from './detection'
import { getCurrentLanguage, i18nContent } from './i18n'
import { showWarning } from './ui'

export function backgroundCheckWebGL(): void {
  try {
    const acceleration = detectGraphicsAcceleration()
    const rendererInfo = getRendererInfo()

    setCachedWebGLSupport({
      webglSupported: acceleration.webglSupported,
      hardwareAccelerated:
        acceleration.hardwareAccelerated && !(rendererInfo && rendererInfo.isSoftwareRenderer)
    })

    const cached = getCachedWebGLSupport()
    if (cached) {
      if (!cached.webglSupported || !cached.hardwareAccelerated) {
        disableGradientBackground()
      } else {
        enableGradientBackground()
      }
    }
  } catch (error) {
    // Silent fail for background check
  }
}

export function checkGraphicsSupport(): void {
  if (hasShownWarning()) {
    return
  }

  try {
    const currentLang = getCurrentLanguage()
    const acceleration = detectGraphicsAcceleration()
    const rendererInfo = getRendererInfo()

    setCachedWebGLSupport({
      webglSupported: acceleration.webglSupported,
      hardwareAccelerated:
        acceleration.hardwareAccelerated && !(rendererInfo && rendererInfo.isSoftwareRenderer)
    })

    if (!acceleration.webglSupported) {
      disableGradientBackground()
      const content = i18nContent[currentLang].webglError
      showWarning(content.title, content.content, 'error')
    } else if (
      !acceleration.hardwareAccelerated ||
      (rendererInfo && rendererInfo.isSoftwareRenderer)
    ) {
      disableGradientBackground()
      const content = i18nContent[currentLang].performanceWarning
      showWarning(content.title, content.content, 'warning')
    } else {
      enableGradientBackground()
    }
  } catch (error) {
    // Silent fail for graphics check
  }
}

export function initializeWebGL(): void {
  const cachedState = getCachedWebGLSupport()

  if (cachedState) {
    applyCachedWebGLState(cachedState.webglSupported, cachedState.hardwareAccelerated)
  }

  // Detect silently. The gradient background is decorative, so a reader without
  // WebGL or hardware acceleration should simply not see it -- interrupting them
  // with a modal that tells them to upgrade their browser is not worth it.
  setTimeout(backgroundCheckWebGL, 1500)
}
