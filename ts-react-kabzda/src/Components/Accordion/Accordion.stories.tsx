// import React, {useState} from 'react';
// import {action} from '@storybook/addon-actions'
// import {Accordion, AccordionPropsType} from './Accordion'
// import {Story} from "@storybook/react";
//
// export default {
//     title: 'Accordion',
//     component: Accordion,
// }
//
// const callback = action('accordion mode change, event fired');
// const onClickCallback = action('some item was clicked');
//
// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
// const callbacksProps = {
//     onChange: callback,
//     onClick: onClickCallback
// }
//
// export const MenuCollapedMode2 = Template.bind({})
// MenuCollapedMode2.args = {
//     titleValue: 'Menu',
//     collapsed: true,
//     items: [],
//     ...callbacksProps
// }
//
// export const UsersUncollapsedMode = Template.bind({})
// UsersUncollapsedMode.args = {
//     titleValue: 'Users',
//     collapsed: false,
//     items: [],
//     ...callbacksProps
//
// }
//
// export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
//                                                   collapsed={true}
//                                                   onClick={callback}
//                                                   onChange={callback}/>
// export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'}
//                                                      collapsed={false}
//                                                      onClick={onClickCallback}
//                                                      onChange={callback}/>
//
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true)
//     return <Accordion titleValue={'Users'} collapsed={value} onClick={() => setValue(!value)}/>
// };

export default Number