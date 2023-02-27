import React from "react";

/**
 * Responding to Events
 *
 * https://beta.reactjs.org/learn/responding-to-events
 */

import "./App.css";

/**
 * Button
 */

type buttonProps = {
  message: string;
  children: string;
};

function Button({ message, children }: buttonProps) {
  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    alert(message);
  };

  return <button onClick={handleClick}>{children}</button>;
}

/**
 * Nav container
 */

type navProps = {
  children: React.ReactNode;
};

const navStyles = {
  backgroundColor: "lightgray",
  padding: "1rem",
  border: "1px solid Blue",
  display: "flex",
  gap: "1rem",
} as React.CSSProperties;

function Nav({ children }: navProps): JSX.Element {
  return (
    <div>
      <div style={navStyles} onClick={() => alert("Nav clicked")}>
        <h1>Nav</h1>
        {children}
      </div>
    </div>
  );
}

/**
 * App
 */

function App() {
  return (
    <div className="App">
      <Nav>
        <Button message="Hello, world!">Click me!</Button>
        <Button message="Hello, guachita!">Hola guacha!</Button>
      </Nav>
    </div>
  );
}

export default App;
