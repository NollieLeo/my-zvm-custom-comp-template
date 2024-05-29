/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
import { useState } from 'react';

interface CountProps {
  globalData: Record<string, any>;
}

export function Count(props: CountProps) {
  console.log(props);
  const [count, setCount] = useState(0);
  return <div>
    <button onClick={() => setCount(count + 1)}>{count}</button>
    <span>我是一个傻逼自定义组件</span>
  </div>;
}
