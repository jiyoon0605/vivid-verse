import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import TextButton from "@/app/_components/buttons/TextButton";
import {IBM_Plex_Sans_KR} from 'next/font/google';

const font = IBM_Plex_Sans_KR({weight: ['400', '700'], subsets: ['latin']});

const meta = {
    title: 'Button/TextButton',
    component: TextButton,
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
} satisfies Meta<typeof TextButton>;

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