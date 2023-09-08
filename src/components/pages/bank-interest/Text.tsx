import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { CalcCtx } from '@/context/CalcValueContext';
import { formatMoney } from '@/utils/calculateUtils';

import { CalcProps } from '../types';

interface ValidationObj {
  min: number;
  max: number;
}

interface DefaultObj {
  name: string;
  value: number;
}
interface FieldInputProps {
  increment: number;
  defaultValue: DefaultObj;
  showArrows?: boolean;
  bounds: ValidationObj;
  type: 'money' | 'percent' | 'year';
}

const friendlyFieldString = ({
  increment,
  defaultValue,
  type,
}: FieldInputProps) => {
  if (type === 'money') {
    const tmp = formatMoney(defaultValue.value);
    return `${tmp}`;
  }
  if (type === 'percent') {
    return `${defaultValue.value}%`;
  }
  return `${defaultValue.value}`;
};

const validate = (value: string, type: string): boolean => {
  if (!value) return true;
  if (type === 'percent') {
    return /^\d+\.{0,1}\d{0,2}$/.test(value);
  }
  return /^[0-9]+$/.test(value);
};
export default function Text(props: FieldInputProps) {
  const { increment, type, defaultValue, showArrows, bounds } = props;
  const [calcCtx, setCalcCtx] = useContext(CalcCtx);

  const fieldstr = friendlyFieldString(props);

  const [text, setText] = useState<string>(fieldstr);
  const [count, setCount] = useState<any>(defaultValue.value);
  const [visible, setVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fieldstring = friendlyFieldString({
      increment,
      defaultValue: {
        name: defaultValue.name,
        value: count,
      },
      type,
      showArrows,
      bounds,
    });

    calcCtx[defaultValue.name] = parseFloat(count);

    setText(fieldstring);
    setCalcCtx(calcCtx);
  }, [increment, type, count, bounds, calcCtx]);

  function increase() {
    const newCount = count + increment;

    if (newCount > bounds.max) {
      setError(`Must be between ${bounds.min} and ${bounds.max}`);

      return;
    }
    setError('');

    setCount(newCount);
  }

  function decrease() {
    const newCount = count - increment;
    if (newCount < bounds.min) {
      setError(`Must be between ${bounds.min} and ${bounds.max}`);

      return;
    }
    setError('');
    setCount(newCount);
  }

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    if (!validate(e.target.value, type)) {
      return;
    }

    if (e.target.value) {
      const newCount = parseFloat(e.target.value);

      if (newCount > bounds.max || newCount < bounds.min) {
        setError(`Must be between ${bounds.min} and ${bounds.max}`);
      } else {
        setError('');
      }

      setCount(e.target.value);
    } else {
      setCount('');
    }
  }

  function toggle(isVisible: boolean) {
    setError('');
    setVisible(isVisible);

    if (!count || error) {
      setCount(bounds.min);
    }
  }

  const newLocal = 'block mt-2 text-red-500';
  return (
    <>
      <div className="inline-block w-auto">
        <div className="flex h-12">
          {!visible && (
            <>
              <strong
                onClick={() => toggle(!visible)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    toggle(!visible);
                  }
                }}
                className="inline-block cursor-pointer text-3xl font-bold text-white pr-2"
              >
                {text}
              </strong>
              {showArrows && (
                <div className="flex flex-col justify-center">
                  <AiOutlineUp
                    onClick={increase}
                    className="inline-block h-5 w-5 cursor-pointer text-slate-500"
                  />
                  <AiOutlineDown
                    onClick={decrease}
                    className="inline-block h-5 w-5 cursor-pointer text-slate-500"
                  />
                </div>
              )}
            </>
          )}
          {visible && (
            <input
              className="w-48 border text-5xl font-bold text-slate-800 shadow-sm"
              type="text"
              value={count}
              onBlur={() => toggle(!visible)}
              onChange={change}
            />
          )}
        </div>
      </div>
      {error && <label className={newLocal}>{error}</label>}
    </>
  );
}
