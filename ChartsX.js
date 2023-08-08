import React, { useEffect } from 'react';

import * as d3 from 'd3';
import { getHourlyExch } from './Api';

function Charts() {
  const arrq = [100, 120, 180, 150, 300, 370, 400];
  console.log(typeof arrq);
  //720 month +1
  const arr = getHourlyExch.map((el) => el.volume);
  const time = 2;
  {
    //168 week
    const arr = getHourlyExch.map((el) => el.volume).slice(552);
    const time = Math.min(2 / (168 / 720));
    console.log(time, 'time');
  }
  {
    //3 day
    const arr = getHourlyExch.map((el) => el.volume).slice(648);
    const time = Math.min(2 / (72 / 720));
    console.log(time, 'time');
  }
  {
    //day
    const arr = getHourlyExch.map((el) => el.volume).slice(696);
    const time = Math.min(2 / (24 / 720));
    console.log(time, 'time');
  }

  //------------------------------------ слова с прим стилей на текст
  // useEffect(() => {
  //   let ror = d3
  //     .select('body')
  //     .selectAll('.items li')
  //     .data(arr)
  //     .style('font-size', function (d) {
  //       return d + 'px';
  //     });

  //   ror
  //     .enter()
  //     .append('li')
  //     .text(function (d) {
  //       return 'This is num ' + d;
  //     });
  //   ror.exit().remove();
  // }, []);

  // //------------------------------------ прямоуг-к
  // useEffect(() => {
  //   let ror = d3
  //     .select('body')
  //     .append('svg')
  //     .attr('width', 400)
  //     .attr('height', 400)
  //     .style('background', '#ccc')
  //     .append('rect')
  //     .attr('width', 300)
  //     .attr('height', 300)
  //     .attr('x', 150) // расположение в координатах
  //     .attr('y', 350) // расположение в координатах
  //     .style('fill', 'red')
  //     .style('stroke', 'black')
  //     .style('stroke-width', '1');

  //   ror
  //     .enter()
  //     .append('li')
  //     .text(function (d) {
  //       return 'This is num ' + d;
  //     });
  //   ror.exit().remove();
  // }, []);
  //------------------------------------ создание столбцов хард
  // const height = 500;
  // const width = 500;
  // const barWidth = 35;
  // const barOffset = 5;

  // useEffect(() => {
  //   let ror = d3
  //     .select('body')
  //     .append('svg')
  //     .attr('width', width)
  //     .attr('height', height)
  //     .style('background', '#ccc')
  //     .selectAll('rect') // создание прямоуг шкалы
  //     .data(arr)
  //     .enter()
  //     .append('rect')
  //     .style('fill', 'red')
  //     .attr('width', barWidth) // толщина стобца а barOffset расстояние между ними
  //     .attr('height', function (d) {
  //       return d;
  //     })
  //     .attr('x', function (d, i) {
  //       return i * (barWidth + barOffset); // по шкале Х горизонт певая шкала в нулевой позиции
  //       // последующие 35+5 * [0,1,2,3,4,5]
  //     })
  //     .attr('y', function (d) {
  //       return height - d; // вертикаль = от указанной высоты 500 - 100 = 400 отступ от верха)
  //     })
  //     .style('stroke', 'black')
  //     .style('stroke-width', '1');

  //   ror
  //     .enter()
  //     .append('li')
  //     .text(function (d) {
  //       return 'This is num ' + d;
  //     });
  //   ror.exit().remove();
  // }, []);

  // var width1 = 1000;
  // var height1 = 500;

  //Create SVG element
  // var svg = d3
  //   .select('body')
  //   .append('svg')
  //   .attr('width', width)
  //   .attr('height', height);

  // //Create line element inside SVG
  // svg
  //   .append('line')
  //   .attr('x1', 100)
  //   .attr('x2', 500)
  //   .attr('y1', 50)
  //   .attr('y2', 50)
  //   .attr('stroke', 'black');

  // если удастся scale  то проблем чуть меньше = прировняет относительно самого себя
  // const heightL = d3.max(arr) + 100; // залипуха
  // const widthL = (arr.length - 1) * 2; //залипуха
  const height = 700;
  const width = 1440;
  // const time = 2; //часы

  useEffect(() => {
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(arr)])
      .range([0, height]);

    let xScale = d3.scaleOrdinal().domain([0, arr.length]).range([0, width]);

    let ror = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#ccc')
      .selectAll('rect') // создание прямоуг шкалы
      .data(arr)
      .enter();

    ror
      // .selectAll('line')
      .append('line')
      .style('fill', 'red')
      // .attr('width', xScale())  // высота и ширина для линии???
      // .attr('height', function (d) {
      //   yScale(d);
      // })
      // .attr('width', barWidth) // толщина стобца а barOffset расстояние между ними
      // .attr('height', function (d) {
      //   return d;
      // })
      // .attr('x1', 10)
      // .attr('x2', 100)
      // .attr('y1', 600)
      // .attr('y2', 500)

      ///

      .attr('x1', function (d, i) {
        return time * i; // по шкале Х горизонт певая шкала в нулевой позиции
        // последующие 35+5 * [0,1,2,3,4,5]
      })
      .attr('x2', function (d, i) {
        return time * i + time;
        // return (i + 1) * barWidthL + barOffsetL; // по шкале Х горизонт певая шкала в нулевой позиции
        // //   // последующие 35+5 * [0,1,2,3,4,5]
      })
      .attr('y1', function (d, i) {
        // опр длинну линии
        return height - yScale(d); // вертикаль = от указанной высоты 500 - 100 = 400 отступ от верха)
      })
      .attr('y2', function (d, i) {
        // хз сделать пока через цикл или как чтобы брать след елемент
        return arr[i + 1] !== undefined
          ? height - yScale(arr[i + 1])
          : height - yScale(d); // вертикаль = от указанной высоты 500 - 100 = 400 отступ от верха)
      })
      .style('stroke', 'black')
      .style('stroke-width', '1');

    // ror
    //   .enter()
    //   .append('li')
    //   .text(function (d) {
    //     return 'This is num ' + d;
    //   });
    // ror.exit().remove();
  }, []);
  //------------------------------------ создание столбцов динамика

  // const barWidth = 35;
  // const barOffset = 5;
  // let yScale = d3
  //   .scaleLinear()
  //   .domain([0, d3.max(arr)])
  //   .range([0, height]);
  // let yScale = d3.scaleLinear /// что пошло не так не совпаедает с webpack-om
  //   .domain([0, d3.max(arr)]) // d3 охреневший - может сам нашадить мах?
  //   .range([0, height]); // эмм диапозон - если больше то что?

  // let xScale = d3
  //   .scaleOrdinal()
  //   .domain([d3.range([0, arr.length])])
  //   .rangeBands([0, width]);

  // эти scale чтото барахлят с webpack-ом
  // console.log(arr.length, 'arrlength');

  // useEffect(() => {
  //   const height = 500;
  //   const width = 500;

  //   var xxScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
  //   const xxScaleq = d3
  //     .scaleOrdinal()
  //     .domain(['one', 'two', 'three', 'four'])
  //     .range([0, width]);
  //   // const xxScale = d3.scaleBand().domain([d3.range([0, arr.length])]);
  //   // .range(0, width);
  //   // .scaleBand([0, width]);
  //   console.log(xxScale);
  //   const yyScale = d3
  //     .scaleLinear()
  //     .domain([0, d3.max(arr)])
  //     .range([0, height]);
  //   // let ror = d3
  //   d3.selectAll('#chart')
  //     .append('svg')
  //     .attr('width', width)
  //     .attr('height', height)
  //     .style('background', '#ccc')
  //     .selectAll('rect') // создание прямоуг шкалы
  //     .data(arr)
  //     .enter()
  //     .append('rect')
  //     .style('fill', 'red')
  //     .attr('width', xxScale.range()) ///
  //     // .attr('width', barWidth) // толщина стобца а barOffset расстояние между ними
  //     .attr('height', function (d) {
  //       console.log(yyScale(d));
  //       console.log(xxScale(d));
  //       return yyScale(d);
  //     })
  //     .attr('x', function (d, i) {
  //       return xxScale(i); // по шкале Х горизонт певая шкала в нулевой позиции
  //       // последующие 35+5 * [0,1,2,3,4,5]
  //     })
  //     .attr('y', function (d) {
  //       return height - yyScale(d); // вертикаль = от указанной высоты 500 - 100 = 400 отступ от верха)
  //     })
  //     .style('stroke', 'black')
  //     .style('stroke-width', '1');

  //   // ror
  //   //   .enter()
  //   //   .append('li')
  //   //   .text(function (d) {
  //   //     return 'This is num ' + d;
  //   //   });
  //   // ror.exit().remove();
  // });

  return (
    <>
      <div id="chart"></div>
      <ul className="items">
        <li>This is the charts bitcha</li>
        <li>This is the D3 bitcha</li>
        <li>This is the D3 bitcha</li>
        <li>This is the D3 bitcha</li>
        <li>This is the D3 bitcha</li>
      </ul>
      {/* //------------------------------------ прямоуг-к  */}
      <svg width="400" height="300" style={{ background: '#ccc' }} x="50">
        <rect
          width="300"
          height="200"
          style={{
            fill: 'rgb(255,0,0)',
            stroke: 'rgb(0,0,0)',
            strokewidth: '1',
            x: '50',
            y: '50',
          }}
        />{' '}
      </svg>
      {/* //------------------------------------ прямоуг-к  */}
    </>
  );
}

export default Charts;

// ________-------- ________-------- ________-------- ________-------- ________-------- ________-------- ________--------
import React, { useEffect, useState } from 'react';

import * as d3 from 'd3';
import { getHourlyExch } from './Api';
// import { getHourlyExch } from './Api';

function Charts(mo) {
  const height = 700;
  const width = 1440; //все завязано на ширину ((
  const time = Math.min(2 / (+mo.mo / 720));
  const [chart1, setChart1] = useState([]);

  useEffect(() => {
    async function nameCoin() {
      const data = await getHourlyExch();
      console.log(data);
      setChart1(data);
    }

    nameCoin();
  }, []);
  let chart = chart1.map((el) => el.volume).slice(720 - +mo.mo);

  console.log(chart, 'getListCoin');

  useEffect(() => {
    // const take = async () => {
    //   let r = await getHourlyExch();
    //   console.log(chart);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chart)])
      .range([0, height]);

    const ror = d3
      .select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#ccc')
      .selectAll('rect')
      .data(chart);

    ror
      .enter()
      .append('line')

      .attr('x1', function (d, i) {
        return time * i;
      })
      .attr('x2', function (d, i) {
        return time * i + time;
      })
      .attr('y1', function (d, i) {
        return height - yScale(d);
      })
      .attr('y2', function (d, i) {
        return chart[i + 1] !== undefined
          ? height - yScale(chart[i + 1])
          : height - yScale(d);
      })
      .style('stroke', 'black')
      .style('stroke-width', '1');

    // ror.exit().remove();

    //ф-я очистки
    // };
    // take();

    return () => d3.select('svg').remove();
  }, [mo]);

  return (
    <>
      <div id="chart"></div>
      <div>{mo.mo}</div>
    </>
  );
}

export default Charts;

// ________-------- ________-------- ________-------- ________-------- ________-------- ________-------- ________--------


import { useEffect, useState } from 'react';
import { getListCoin, getHourlyExch } from './Api';
import './App.css';
import Charts from './Charts';

function App() {
  // const ror = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=INSERT-YOUR-API-KEY-HERE
  // ')
  var requestTime = Math.floor(Date.now() / 1000);
  console.log(requestTime);
  const [coin, setCoin] = useState('');
  const [mo, setMo] = useState('12');
  const [name, setName] = useState([]);

  const onClick2 = (e) => {
    setMo(e.target.value);
  };

  useEffect(() => {
    async function nameCoin() {
      const data = await getListCoin();
      console.log(data);
      setName(data);
    }

    nameCoin();
  }, []);

  console.log(name, 'getListCoin');

  return (
    <>
      <div className="App">
        <Charts mo={mo} />
        <div className="table">
          <button onClick={onClick2} value="24">
            Day
          </button>

          <button onClick={onClick2} value="72">
            3 Days
          </button>
          <button onClick={onClick2} value="168">
            Week
          </button>
          <button onClick={onClick2} value="720">
            Month
          </button>
          {/* сделать связь с запросом */}
          <button onClick={onClick2} value={mo}>
            Refresh
          </button>

          <select
            name="coins"
            id="coin-select"
            onChange={(e) => setCoin(e.target.value)}
          >
            {/*------------------ заглушка------------------ */}
            {/* <option value="BTC">BTC</option> */}
            {/* // BTC именно его указать первым? */}
            {/* {async function fishka() {
              const t = await getListCoin()
              console.log(t);
              t.map((symbol) => <option value={symbol}>{symbol}</option>);
            }} */}
            {name.map((symbol) => (
              <option value={symbol}>{symbol}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
