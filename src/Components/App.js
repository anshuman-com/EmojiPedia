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
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(EmojiCard)}
            </dl>
        </div>
    );
}

export default App;
