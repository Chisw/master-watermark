import React, { useRef, useCallback } from 'react'
import { IExportSetting } from '../../ts/type'
import { FormGroup, RadioButtonGroup, RadioButton, Slider, NumberInput, Checkbox } from 'carbon-components-react'
import ToggleBox from '../ToggleBox'
import { get } from 'lodash'

interface ExportSettingProps {
  exportSetting: IExportSetting
  setExportSetting: (setting: IExportSetting) => void
}

export default function ExportSetting(props: ExportSettingProps) {

  const {
    exportSetting,
    setExportSetting,
  } = props

  const {
    format,
    quality,
    scaleType,
    scalePixel,
    scalePercent,
    saveEXIF,
  } = exportSetting

  const scaleInputRef = useRef<any>(null)

  const _setExportSetting = useCallback((key: string, value: any) => {
    setExportSetting(Object.assign({}, exportSetting, { [key]: value }))
  }, [exportSetting, setExportSetting])

  return (
    <>
      <h4 className="mt-6 mb-4 text-xl text-gray-600">导出设置</h4>
      <div>
        <FormGroup legendText="图像格式">
          <RadioButtonGroup
            name="format"
            valueSelected={format}
            onChange={(value: string) => _setExportSetting('format', value)}
          >
            <RadioButton
              id="origin"
              labelText="原格式"
              value="origin"
            />
            <RadioButton
              id="jpeg"
              labelText="JPG"
              value="jpeg"
            />
            <RadioButton
              id="png"
              labelText="PNG"
              value="png"
            />
            <RadioButton
              id="webp"
              labelText="WEBP"
              value="webp"
            />
          </RadioButtonGroup>
        </FormGroup>

        <ToggleBox isOpen={format === 'jpeg'}>
          <FormGroup legendText="图像品质">
            <Slider
              max={100}
              min={0}
              value={quality}
              onChange={({ value }) => _setExportSetting('quality', value)}
            />
          </FormGroup>
        </ToggleBox>

        <FormGroup legendText="图像缩放">
          <RadioButtonGroup
            name="scale"
            valueSelected={scaleType}
            onChange={(value: string) => _setExportSetting('scaleType', value)}
          >
            <RadioButton
              id="none"
              labelText="不缩放"
              value="none"
            />
            <RadioButton
              id="pixel"
              labelText="按指定像素缩放"
              value="pixel"
            />
            <RadioButton
              id="percent"
              labelText="按相对百分比缩放"
              value="percent"
            />
          </RadioButtonGroup>
          <ToggleBox isOpen={scaleType !== 'none'}>
            <>
              <div className="mt-2 flex items-center">
                <div className="pt-2">
                  缩放至
                </div>
                <div className="mx-2">
                  <NumberInput
                    id="scale"
                    min={0}
                    max={25600}
                    step={1}
                    ref={scaleInputRef}
                    value={scaleType === 'pixel' ? scalePixel : scalePercent}
                    onChange={() => {
                      const value = Number(get(scaleInputRef, 'current.value'))
                      if (!isNaN(value)) {
                        const key = scaleType === 'pixel' ? 'scalePixel' : 'scalePercent'
                        _setExportSetting(key, value)
                      }
                    }}
                    invalidText=""
                  />
                </div>
                <div className="pt-2">
                  {scaleType === 'pixel' ? 'px' : '%'}
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 leading-relaxed">
                此为宽度调整，高度将按原宽高比进行相应缩放<br />
                最大仅支持缩放至 25600px
              </div>
            </>
          </ToggleBox>
        </FormGroup>

        <FormGroup legendText="EXIF 信息">
          <Checkbox
            id="exif"
            labelText="保留原图的 EXIF 信息"
            checked={saveEXIF}
            onChange={(value: boolean) => _setExportSetting('saveEXIF', value)}
          />
        </FormGroup>

      </div>
    </>
  )
}