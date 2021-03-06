import React, { useRef, useCallback } from 'react'
import { IWatermark } from '../../ts/type'
import { FormGroup, RadioButtonGroup, RadioButton, Slider, NumberInput, Checkbox } from 'carbon-components-react'
import ToggleBox from '../ToggleBox'
import { get } from 'lodash'

interface ExportSettingProps {
  watermark: IWatermark,
  setWatermark: (watermark: IWatermark) => void
}

export default function ExportSetting(props: ExportSettingProps) {

  const {
    watermark,
    setWatermark,
  } = props

  const {
    format,
    quality,
    scaleType,
    scalePixel,
    scalePercent,
    saveEXIF,
  } = watermark.exportSetting!

  const scaleInputRef = useRef<any>(null)

  const _set = useCallback((key: string, value: any) => {
    setWatermark(Object.assign({}, watermark, { exportSetting: Object.assign({}, watermark.exportSetting, { [key]: value }) }))
  }, [watermark, setWatermark])

  return (
    <>
      <div className="mt-4">
        <FormGroup legendText="图像格式">
          <RadioButtonGroup
            name="format"
            valueSelected={format}
            onChange={(value: string) => _set('format', value)}
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

        <ToggleBox isOpen={['jpeg', 'webp'].includes(format)}>
          <FormGroup legendText="图像品质">
            <Slider
              max={100}
              min={0}
              value={quality}
              onChange={({ value }) => _set('quality', value)}
            />
          </FormGroup>
        </ToggleBox>

        <FormGroup legendText="图像缩放">
          <RadioButtonGroup
            name="export-scale"
            valueSelected={scaleType}
            onChange={(value: string) => _set('scaleType', value)}
          >
            <RadioButton
              id="export-scale-none"
              labelText="不缩放"
              value="none"
            />
            <RadioButton
              id="export-scale-pixel"
              labelText="固定像素"
              value="pixel"
            />
            <RadioButton
              id="export-scale-percent"
              labelText="相对百分比"
              value="percent"
            />
          </RadioButtonGroup>
        </FormGroup>

        <ToggleBox isOpen={scaleType !== 'none'}>
          <FormGroup legendText="缩放至">
            <div className="flex items-center">
              <div className="mr-2">
                <NumberInput
                  id="export-scale-value"
                  min={0}
                  max={25600}
                  step={1}
                  invalidText=""
                  ref={scaleInputRef}
                  value={scaleType === 'pixel' ? scalePixel : scalePercent}
                  onChange={() => {
                    const value = Number(get(scaleInputRef, 'current.value'))
                    if (!isNaN(value)) {
                      const key = scaleType === 'pixel' ? 'scalePixel' : 'scalePercent'
                      _set(key, value)
                    }
                  }}
                />
              </div>
              <div className="pt-2">
                {scaleType === 'pixel' ? 'px' : '%'}
              </div>
            </div>
            <div className="mt-1 text-xs text-gray-500 leading-relaxed">
              此为宽度调整，高度将按原宽高比进行相应缩放<br />
              最大仅支持缩放至 25600px
            </div>
          </FormGroup>
        </ToggleBox>

        <FormGroup legendText="EXIF 信息">
          <Checkbox
            id="exif"
            labelText="保留原图 EXIF 信息"
            checked={saveEXIF}
            onChange={(value: boolean) => _set('saveEXIF', value)}
          />
        </FormGroup>

      </div>
    </>
  )
}