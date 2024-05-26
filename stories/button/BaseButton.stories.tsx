import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import BaseButton from "@/app/_components/buttons/BaseButton";
import {IBM_Plex_Sans_KR} from 'next/font/google';
const font = IBM_Plex_Sans_KR({weight: ['400', '700'], subsets: ['latin']});

const meta = {
    title: 'Button/BaseButton',
    component: BaseButton,
    parameters: {
        layout: 'centered',
    },
    decorators: [(Story) => <div className={`${font.className} font-ibm-kr`}><Story /></div>],
    tags: ['autodocs'],
    argTypes: {
        children: {control: 'text', description: '버튼 라벨'},
        disabled: {control: 'boolean', description: '활성화 여부'}
    },
    args: {onClick: fn()},
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'default button',
    },
};

export const Disabled: Story = {
    args: {
        children: 'disabled button',
        disabled: true
    },
};