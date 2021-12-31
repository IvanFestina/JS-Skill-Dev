import React, {useState} from 'react';
import { action } from '@storybook/addon-actions'
import {OnOff} from './OnOff'

export default {
  title: 'OnOff',
  component: OnOff,
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff lights={true} setLights={callback} />
export const OffMode = () => <OnOff lights={false} setLights={callback} />

export const ModeChanging = () => {
  const [lights, setLights] = useState<boolean>(true)
  return <OnOff lights={lights} setLights={setLights} />
};