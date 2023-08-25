import React, { useContext, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

import { CalcCtx } from '@/context/CalcValueContext';

interface FieldObj {
  label: string;
  value: string;
}

interface FieldDropDownProps {
  fields: FieldObj[];
  text: string;
  property: 'paymentFrequency' | 'compoundFrequency';
}

export default function Text(props: FieldDropDownProps) {
  const { fields, property, text: defaultText } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>(defaultText);
  const [calcCtx, setCalcCtx] = useContext(CalcCtx);

  const toggle = (isVisible: boolean) => {
    setVisible(isVisible);
  };

  const setValue = (label: string, value: string) => {
    calcCtx[property] = value;
    setText(label);
    setVisible(false);
    setCalcCtx(setCalcCtx);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex cursor-pointer font-bold underline"
        onClick={() => toggle(!visible)}
      >
        {text}
        <AiOutlineDown className="-mr-1 ml-0 h-5 w-5" aria-hidden="true" />
      </button>
      {visible && (
        <div className="absolute inset-x-0 z-10 mt-2 w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:origin-top-right">
          {(() => {
            if (fields && fields.length > 0) {
              return (
                <div className="py-1" role="none">
                  <ul>
                    {fields.map((item, idx) => (
                      <li
                        className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-slate-900"
                        key={`${item.value}-${idx}`}
                        onClick={() => setValue(item.label, item.value)}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          })()}
        </div>
      )}
    </div>
  );
}
