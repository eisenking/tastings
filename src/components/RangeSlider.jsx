import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';

const STEP = 0.1;
const MIN = 1;
const MAX = 30;

const RangeSlider = ({ rtl, onValueChange }) => {
  
  const [values, setValues] = React.useState([1]);

  React.useEffect(() => {
    if (onValueChange) {
      onValueChange(values[0]);
    }
  }, [values, onValueChange]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '10px',
      }}
    >
      <output style={{ marginTop: '5px', fontSize: '1.3rem' }} id="output">
        <span style={{ textAlign: 'center' }} >Необходимый вес начинки: {values[0].toFixed(1)} кг.</span>
      </output>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              padding: '20px'
            }}
          >
            <div
              ref={props.ref}
              style={{
                marginLeft: '20px',
                height: '5px',
                minWidth: '200px',
                flexGrow: '1',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#548BF4', '#ccc'],
                  min: MIN,
                  max: MAX,
                  rtl
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC'
              }}
            />
          </div>
        )}
      />
      {/* <output style={{ marginTop: '5px' }} id="output">
        <span>Вес торта: {values[0].toFixed(1)} кг.</span>
      </output> */}
    </div>
  );
};

export default RangeSlider;