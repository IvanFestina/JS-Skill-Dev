import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion'

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change, event fired');
const onCliCkCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion title={'Menu'}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[
                                                      {title: 'Dimych', value: 1},
                                                      {title: 'Valera', value: 2},
                                                      {title: 'Artem', value: 3},
                                                      {title: 'Victor', value: 4}]}
                                                  onClick={onCliCkCallback}/>
export const UsersUncollapsedMode = () => <Accordion title={'Users'}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[
                                                         {title: 'Dimych', value: 1},
                                                         {title: 'Valera', value: 2},
                                                         {title: 'Artem', value: 3},
                                                         {title: 'Victor', value: 4}
                                                         ]}
                                                     onClick={onCliCkCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: 'Dimych', value: 1},
                          {title: 'Valera', value: 2},
                          {title: 'Artem', value: 3},
                          {title: 'Victor', value: 4}
                          ]}
                      onClick={(id) => {alert(`user with ID ${id} should be happy`)}}
    />
};
