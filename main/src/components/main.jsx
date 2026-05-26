import React from "react";
import Card from "./card";

class Main extends React.Component {
    constructor(props) {
    super(props);
    
    const storageKey = "uta-memory-memos";
    const savedMemos = JSON.parse(localStorage.getItem(storageKey) || "[]");

    this.state = {
        memos: savedMemos,
        inputValue: ""
    };

    this.storageKey = storageKey;
}

saveMemos(memos) {
    localStorage.setItem(this.storageKey, JSON.stringify(memos));
}

handleSubmit = (event) => {
    event.preventDefault();
    const text = this.state.inputValue.trim();
    if (!text) return;

    const newMemos = [text, ...this.state.memos]; // unshiftと同じ効果
    this.setState({
        memos: newMemos,
        inputValue: ""
    });
    this.saveMemos(newMemos);
};

handleDelete = (index) => {
    const newMemos = [...this.state.memos];
    newMemos.splice(index, 1);
    this.setState({ memos: newMemos });
    this.saveMemos(newMemos);
};

render() {
    const { memos, inputValue } = this.state;

    return (
    <main>
        <form className="memo-form" onSubmit={this.handleSubmit}>
            <textarea 
            placeholder="記録を書いてください"
            value={inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
            ></textarea>
            <button type="submit">追加</button>
        </form>

        {memos.length === 0 && (
            <p className="empty">まだ記録はありません。</p>
        )}

        <ul className="memo-stack">
            {memos.map((text, index) => (
            <li key={index} className="memo">
                <span className="memo-text">{text}</span>
                <button 
                className="delete-button" 
                type="button"
                onClick={() => this.handleDelete(index)}
                >
                削除
                </button>
            </li>
        ))}
        </ul>
        </main>
    );
}
}

export default Main;