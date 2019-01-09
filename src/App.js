import React, { useState, useEffect } from 'react';
import './App.css';
import useInputValue from './components/input';
import ColorHelper from './utils/index';

const ViEWHEIGHT = 800;
const MAX = 25;
const MIN = 1;

function App() {
  const startInputHook = useInputValue('#0ebeff', true);
  const endInputHook = useInputValue('#ff42b3');
  const stepInputHook = useInputValue(1);
  const radiosHook = useInputValue('avg');
  const [colors, setColors] = useState([]); 

  const filterStartInputHook = {
    // 过滤掉非原生的props
    value: startInputHook.value, 
    onChange: startInputHook.onChange, 
    disabled: startInputHook.disabled
  };

  debugger;
  const isColor = color => {
    return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/.test(color);
  }

  useEffect(() => {
    if(isColor(startInputHook.value) && isColor(endInputHook.value)) {
      setColors(ColorHelper.gradientor(startInputHook.value, endInputHook.value, stepInputHook.value, radiosHook.value));
    }
  }, [startInputHook.value, endInputHook.value, stepInputHook.value, radiosHook.value]);

  useEffect(() => {
    if(radiosHook.value !== 'avg') {
      startInputHook.setValue('#ffffff');
      startInputHook.setDisabled(true);
    } else {
      startInputHook.setDisabled(false);
    }
  }, [radiosHook.value])


  const styles = c => ({
    backgroundColor: `rgb(${c})`,
    color: ColorHelper.brightness(c),
    height: ViEWHEIGHT/colors.length,
    lineHeight: `${ViEWHEIGHT/colors.length}px`
  })

  const radios = ['avg', 'tintshade', 'antd'];


  return (
      <div className="App">
        <section className="controller">
          <div className="radios">
            <ul>
              {
                radios.map(r => (
                  <li key={r}>
                    <input type="radio" id={r} name="selector" {...radiosHook } value={r} checked={radiosHook.value === r} />
                    <label htmlFor={r}>{r}</label>
                    <div className="check"></div>
                </li>
                ))
              }
            </ul>
          </div>

        
          <div className="color-picker">
              <input type="color" {...filterStartInputHook} disabled={startInputHook.disabled} />
              <input type="text" {...filterStartInputHook} disabled={startInputHook.disabled}/>
          </div>
          <div className="range">
            <input type="range" min={MIN} max={MAX} {...stepInputHook} />
            <p>Step：{stepInputHook.value}</p>
          </div>
          
          
          <div className="color-picker">
              <input type="color" {...endInputHook} />
              <input type="text" {...endInputHook} />
          </div>
        </section>
        <ul className="color-list">
          {
            colors.map((c) => (
              <li className="color-item" key={Date.now() + c.toString()} style={styles(c)}>
                {ColorHelper.toHex(c)}
              </li>
            ))
          }
        </ul>
      </div>
  );

}

export default App;
