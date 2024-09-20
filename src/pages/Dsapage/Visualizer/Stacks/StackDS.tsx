import React, { FC } from "react";

import PushBox from "./PushBox.tsx";
import Stack from "./Stack.tsx";
import PopBox from "./PopBox.tsx"
import Overflow from "./Overflow.tsx";
import StackEmpty from "./StackEmpty.tsx";
import emptyStack from "./empty-stack.png";
import leftArrow from "./arrowL.webp";

import "./StackDS.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/AppState.ts";

const StackDS: FC = () => {
    const pushOrPop = useSelector((state: AppState) => { return state.pushOrPop });
    const push = pushOrPop?.push;
    const pop = pushOrPop?.pop;

    return (<div id="visualizer-container">
        <div id="visualizer-box">
            <div id="left-arrow"></div>
            <img id="empty-stack" src={emptyStack} alt="not available" />
            <div id="right-arrow"></div>
            <PushBox />
            <Stack />
            <PopBox />
            <Overflow />
            <StackEmpty />
        </div>
    </div>
    );
}

export default StackDS;
