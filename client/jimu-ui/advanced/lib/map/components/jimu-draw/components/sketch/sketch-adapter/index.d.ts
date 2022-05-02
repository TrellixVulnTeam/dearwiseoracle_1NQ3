/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { JimuSketchProps } from '../index';
import { CreatToolActions, SelectToolActions, JimuDrawCompleteDescriptor } from '../constraints';
import type { JimuDrawGraphicsEditedTypes } from '../constraints';
export { CreatToolActions, SelectToolActions };
export type { JimuDrawGraphicsEditedTypes, JimuDrawCompleteDescriptor };
export declare const SketchAdapter: React.MemoExoticComponent<(props: (JimuSketchProps)) => jsx.JSX.Element>;
