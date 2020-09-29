import { IWatermark } from './type'

export const BG_GRID_DATA_DARK = "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%231A202C' d='M0 0h10v10H0zM10 10h10v10H10z'/%3E%3Cpath fill='%232D3748' d='M10 0h10v10H10zM0 10h10v10H0z'/%3E%3C/svg%3E"
export const BG_GRID_DATA_LIGHT = "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M0 0h10v10H0zM10 10h10v10H10z'/%3E%3Cpath fill='%23EDF2F7' d='M10 0h10v10H10zM0 10h10v10H0z'/%3E%3C/svg%3E"

export const PREVIEW_WIDTH_SM = 300
export const PREVIEW_HEIGHT_SM = 160

export const EMPTY_WATERMARK: IWatermark = {
  id: '',
  title: '',
  theme: 'dark',
  showOutline: false,
  type: 'image',
  dataURL: '',
  text: '',
  width: 200,
  height: 100,
  scaleType: 'none',
  scaleBase: 'width',
  scalePixel: 200,
  scalePercent: 10,
  position: 'center-center',
  offsetType: 'none',
  offsetPixelX: 20,
  offsetPixelY: 20,
  offsetPercentX: 5,
  offsetPercentY: 5,
  repeat: 'no-repeat',
  opacity: 100,
  rotate: 0,
  fontSize: 24,
  fontColor: '#000000',
  fontFamily: '',
  fontAlignX: 'flex-start',
  fontAlignY: 'flex-start',
  fontWeight: 'normal',
  fontStyle: 'normal',
  exportSetting: {
    format: 'jpeg',
    quality: 92,
    scaleType: 'none',
    scalePixel: 1080,
    scalePercent: 80,
    saveEXIF: false,
  }
}

export const DEFAULT_WATERMARK_LIST: IWatermark[] = [
  {
    id: 'test01',
    title: 'kacha',
    theme: 'dark',
    showOutline: false,
    type: 'text',
    dataURL: '',
    text: 'Kacha',
    width: 0,
    height: 0,
    scaleType: 'none',
    scaleBase: 'width',
    scalePixel: 200,
    scalePercent: 10,
    position: 'right-bottom',
    offsetType: 'none',
    offsetPixelX: 20,
    offsetPixelY: 20,
    offsetPercentX: 5,
    offsetPercentY: 5,
    repeat: 'repeat',
    opacity: 100,
    rotate: 15,
    fontSize: 24,
    fontColor: '#000000',
    fontFamily: '',
    fontAlignX: 'flex-start',
    fontAlignY: 'flex-start',
    fontWeight: 'normal',
    fontStyle: 'normal',
    exportSetting: {
      format: 'jpeg',
      quality: 92,
      scaleType: 'none',
      scalePixel: 1080,
      scalePercent: 80,
      saveEXIF: false,
    }
  },
  {
    id: 'test02',
    title: 'test',
    theme: 'light',
    showOutline: false,
    type: 'text',
    dataURL: '',
    text: '尚在开发中',
    width: 0,
    height: 0,
    scaleType: 'none',
    scaleBase: 'width',
    scalePixel: 200,
    scalePercent: 10,
    position: 'right-bottom',
    offsetType: 'none',
    offsetPixelX: 20,
    offsetPixelY: 20,
    offsetPercentX: 5,
    offsetPercentY: 5,
    repeat: 'no-repeat',
    opacity: 100,
    rotate: 0,
    fontSize: 24,
    fontColor: '#000000',
    fontFamily: '',
    fontAlignX: 'flex-start',
    fontAlignY: 'flex-start',
    fontWeight: 'normal',
    fontStyle: 'normal',
    exportSetting: {
      format: 'jpeg',
      quality: 92,
      scaleType: 'none',
      scalePixel: 1080,
      scalePercent: 80,
      saveEXIF: false,
    }
  },
]