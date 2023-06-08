import React from "react";
import {Entry} from "./Entry";
import {emojipedia} from "../emojipedia";


function EmojiCard (emoji) {
    return (
        <Entry
        id = {emoji.id}
        name = {emoji.name}
        meaning = {emoji.meaning}
        emoji = {emoji.emoji}
        />
    )
}

function App() {
    return (
        <div>
            <h1 className= "h1">
                <span>emojipedia</span>
            </h1>
            {emojipedia.map(EmojiCard)}
            {/*<Entry*/}
            {/*    id = {emojipedia[0].id}*/}
            {/*    emoji = {emojipedia[0].emoji}*/}
            {/*    name = {emojipedia[0].name}*/}
            {/*    meaning = {emojipedia[0].meaning}*/}
            {/*/>*/}
            {/*<Entry*/}
            {/*    id = {emojipedia[1].id}*/}
            {/*    emoji = {emojipedia[1].emoji}*/}
            {/*    name = {emojipedia[1].name}*/}
            {/*    meaning = {emojipedia[1].meaning}*/}

            {/*/>*/}
            {/*<Entry*/}
            {/*    id = {emojipedia[2].id}*/}
            {/*    emoji = {emojipedia[2].emoji}*/}
            {/*    name = {emojipedia[2].name}*/}
            {/*    meaning = {emojipedia[2].meaning}*/}


        </div>
             )
            }

export default App;
