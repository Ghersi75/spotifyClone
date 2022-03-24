import React from 'react';
import BottomBar from "./BottomBar/BottomBar";
import './App.css';

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {!open && <BottomBar />}
      {open && <> </>}
    </>
  );
}