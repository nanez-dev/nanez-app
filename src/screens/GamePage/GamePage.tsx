import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { gameQuestion, gameAnswer } from '../../mocks/gameData';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import styled from 'styled-components/native';
import TouchableOpacityOnPressOptimized from '../../components/@shared/TouchableOpacityOnPressOptimized/TouchableOpacityOnPressOptimized';

const GamePage = ({ navigation: { navigate } }: any) => {
  /** Step check */
  const [step, setStep] = useState<number>(1);

  /** accord check */
  const [fresh, setFresh] = useState<number>(0);
  const [aqua, setAqua] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [woody, setWoody] = useState<number>(0);

  const [floral, setFloral] = useState<number>(0);
  const [fruity, setFruity] = useState<number>(0);
  const [citrus, setCitrus] = useState<number>(0);
  const [whiteFloral, setWhiteFloral] = useState<number>(0);

  const [vanilla, setVanilla] = useState<number>(0);
  const [sweet, setSweet] = useState<number>(0);
  const [powdery, setPowdery] = useState<number>(0);
  const [musk, setMusk] = useState<number>(0);

  const [smokey, setSmokey] = useState<number>(0);
  const [leather, setLeather] = useState<number>(0);
  const [aroma, setAroma] = useState<number>(0);
  const [amber, setAmber] = useState<number>(0);

  /** result value */
  const [result, setResult] = useState<string>('');

  const onClickAnswer = (index: number, questionIndex: number) => {
    if (questionIndex === 1) {
      if (index === 1) {
        setFresh(1);
        setAqua(1);
        setGreen(1);
        setWoody(1);
        setFloral(2);
        setFruity(2);
        setCitrus(2);
        setWhiteFloral(2);
        setVanilla(-1);
        setSweet(-1);
        setPowdery(-1);
        setMusk(-1);
        setSmokey(-2);
        setLeather(-2);
        setAroma(-2);
        setAmber(-2);
      }
      if (index === 2) {
        setFresh(2);
        setAqua(2);
        setGreen(2);
        setWoody(2);
        setFloral(1);
        setFruity(1);
        setCitrus(1);
        setWhiteFloral(1);
        setVanilla(-2);
        setSweet(-2);
        setPowdery(-2);
        setMusk(-2);
        setSmokey(-1);
        setLeather(-1);
        setAroma(-1);
        setAmber(-1);
      }
      if (index === 3) {
        setFresh(-1);
        setAqua(-1);
        setGreen(-1);
        setWoody(-1);
        setFloral(-2);
        setFruity(-2);
        setCitrus(-2);
        setWhiteFloral(-2);
        setVanilla(1);
        setSweet(1);
        setPowdery(1);
        setMusk(1);
        setSmokey(2);
        setLeather(2);
        setAroma(2);
        setAmber(2);
      }
      if (index === 4) {
        setFresh(-2);
        setAqua(-2);
        setGreen(-2);
        setWoody(-2);
        setFloral(-1);
        setFruity(-1);
        setCitrus(-1);
        setWhiteFloral(-1);
        setVanilla(2);
        setSweet(2);
        setPowdery(2);
        setMusk(2);
        setSmokey(1);
        setLeather(1);
        setAroma(1);
        setAmber(1);
      }
    }
    if (questionIndex === 2) {
      if (index === 1) {
        setFresh((prev) => prev + 2);
        setAqua((prev) => prev + 2);
        setGreen((prev) => prev + 2);
        setWoody((prev) => prev + 2);
        setFloral((prev) => prev + 1);
        setFruity((prev) => prev + 1);
        setCitrus((prev) => prev + 1);
        setWhiteFloral((prev) => prev + 1);
        setVanilla((prev) => prev - 2);
        setSweet((prev) => prev - 2);
        setPowdery((prev) => prev - 2);
        setMusk((prev) => prev - 2);
        setSmokey((prev) => prev - 1);
        setLeather((prev) => prev - 1);
        setAroma((prev) => prev - 1);
        setAmber((prev) => prev - 1);
      }
      if (index === 2) {
        setFresh((prev) => prev + 1);
        setAqua((prev) => prev + 1);
        setGreen((prev) => prev + 1);
        setWoody((prev) => prev + 1);
        setFloral((prev) => prev + 2);
        setFruity((prev) => prev + 2);
        setCitrus((prev) => prev + 2);
        setWhiteFloral((prev) => prev + 2);
        setVanilla((prev) => prev - 1);
        setSweet((prev) => prev - 1);
        setPowdery((prev) => prev - 1);
        setMusk((prev) => prev - 1);
        setSmokey((prev) => prev - 2);
        setLeather((prev) => prev - 2);
        setAroma((prev) => prev - 2);
        setAmber((prev) => prev - 2);
      }
      if (index === 3) {
        setFresh((prev) => prev - 1);
        setAqua((prev) => prev - 1);
        setGreen((prev) => prev - 1);
        setWoody((prev) => prev - 1);
        setFloral((prev) => prev - 2);
        setFruity((prev) => prev - 2);
        setCitrus((prev) => prev - 2);
        setWhiteFloral((prev) => prev - 2);
        setVanilla((prev) => prev + 1);
        setSweet((prev) => prev + 1);
        setPowdery((prev) => prev + 1);
        setMusk((prev) => prev + 1);
        setSmokey((prev) => prev + 2);
        setLeather((prev) => prev + 2);
        setAroma((prev) => prev + 2);
        setAmber((prev) => prev + 2);
      }
      if (index === 4) {
        setFresh((prev) => prev - 2);
        setAqua((prev) => prev - 2);
        setGreen((prev) => prev - 2);
        setWoody((prev) => prev - 2);
        setFloral((prev) => prev - 1);
        setFruity((prev) => prev - 1);
        setCitrus((prev) => prev - 1);
        setWhiteFloral((prev) => prev - 1);
        setVanilla((prev) => prev + 2);
        setSweet((prev) => prev + 2);
        setPowdery((prev) => prev + 2);
        setMusk((prev) => prev + 2);
        setSmokey((prev) => prev + 1);
        setLeather((prev) => prev + 1);
        setAroma((prev) => prev + 1);
        setAmber((prev) => prev + 1);
      }
    }
    if (questionIndex === 3) {
      if (index === 1) {
        setFresh((prev) => prev + 2);
        setAqua((prev) => prev + 2);
        setGreen((prev) => prev + 2);
        setWoody((prev) => prev + 2);
        setFloral((prev) => prev + 1);
        setFruity((prev) => prev + 1);
        setCitrus((prev) => prev + 1);
        setWhiteFloral((prev) => prev + 1);
        setVanilla((prev) => prev - 2);
        setSweet((prev) => prev - 2);
        setPowdery((prev) => prev - 2);
        setMusk((prev) => prev - 2);
        setSmokey((prev) => prev - 1);
        setLeather((prev) => prev - 1);
        setAroma((prev) => prev - 1);
        setAmber((prev) => prev - 1);
      }
      if (index === 2) {
        setFresh((prev) => prev + 1);
        setAqua((prev) => prev + 1);
        setGreen((prev) => prev + 1);
        setWoody((prev) => prev + 1);
        setFloral((prev) => prev + 2);
        setFruity((prev) => prev + 2);
        setCitrus((prev) => prev + 2);
        setWhiteFloral((prev) => prev + 2);
        setVanilla((prev) => prev - 1);
        setSweet((prev) => prev - 1);
        setPowdery((prev) => prev - 1);
        setMusk((prev) => prev - 1);
        setSmokey((prev) => prev - 2);
        setLeather((prev) => prev - 2);
        setAroma((prev) => prev - 2);
        setAmber((prev) => prev - 2);
      }
      if (index === 3) {
        setFresh((prev) => prev - 2);
        setAqua((prev) => prev - 2);
        setGreen((prev) => prev - 2);
        setWoody((prev) => prev - 2);
        setFloral((prev) => prev - 1);
        setFruity((prev) => prev - 1);
        setCitrus((prev) => prev - 1);
        setWhiteFloral((prev) => prev - 1);
        setVanilla((prev) => prev + 2);
        setSweet((prev) => prev + 2);
        setPowdery((prev) => prev + 2);
        setMusk((prev) => prev + 2);
        setSmokey((prev) => prev + 1);
        setLeather((prev) => prev + 1);
        setAroma((prev) => prev + 1);
        setAmber((prev) => prev + 1);
      }
      if (index === 4) {
        setFresh((prev) => prev - 1);
        setAqua((prev) => prev - 1);
        setGreen((prev) => prev - 1);
        setWoody((prev) => prev - 1);
        setFloral((prev) => prev - 2);
        setFruity((prev) => prev - 2);
        setCitrus((prev) => prev - 2);
        setWhiteFloral((prev) => prev - 2);
        setVanilla((prev) => prev + 1);
        setSweet((prev) => prev + 1);
        setPowdery((prev) => prev + 1);
        setMusk((prev) => prev + 1);
        setSmokey((prev) => prev + 2);
        setLeather((prev) => prev + 2);
        setAroma((prev) => prev + 2);
        setAmber((prev) => prev + 2);
      }
    }
    if (questionIndex === 4) {
      if (index === 1) {
        setFresh((prev) => prev + 2);
        setAqua((prev) => prev + 2);
        setGreen((prev) => prev + 2);
        setWoody((prev) => prev + 2);
        setFloral((prev) => prev + 1);
        setFruity((prev) => prev + 1);
        setCitrus((prev) => prev + 1);
        setWhiteFloral((prev) => prev + 1);
        setVanilla((prev) => prev - 2);
        setSweet((prev) => prev - 2);
        setPowdery((prev) => prev - 2);
        setMusk((prev) => prev - 2);
        setSmokey((prev) => prev - 1);
        setLeather((prev) => prev - 1);
        setAroma((prev) => prev - 1);
        setAmber((prev) => prev - 1);
      }
      if (index === 2) {
        setFresh((prev) => prev + 1);
        setAqua((prev) => prev + 1);
        setGreen((prev) => prev + 1);
        setWoody((prev) => prev + 1);
        setFloral((prev) => prev + 2);
        setFruity((prev) => prev + 2);
        setCitrus((prev) => prev + 2);
        setWhiteFloral((prev) => prev + 2);
        setVanilla((prev) => prev - 1);
        setSweet((prev) => prev - 1);
        setPowdery((prev) => prev - 1);
        setMusk((prev) => prev - 1);
        setSmokey((prev) => prev - 2);
        setLeather((prev) => prev - 2);
        setAroma((prev) => prev - 2);
        setAmber((prev) => prev - 2);
      }
      if (index === 3) {
        setFresh((prev) => prev - 2);
        setAqua((prev) => prev - 2);
        setGreen((prev) => prev - 2);
        setWoody((prev) => prev - 2);
        setFloral((prev) => prev - 1);
        setFruity((prev) => prev - 1);
        setCitrus((prev) => prev - 1);
        setWhiteFloral((prev) => prev - 1);
        setVanilla((prev) => prev + 2);
        setSweet((prev) => prev + 2);
        setPowdery((prev) => prev + 2);
        setMusk((prev) => prev + 2);
        setSmokey((prev) => prev + 1);
        setLeather((prev) => prev + 1);
        setAroma((prev) => prev + 1);
        setAmber((prev) => prev + 1);
      }
      if (index === 4) {
        setFresh((prev) => prev - 1);
        setAqua((prev) => prev - 1);
        setGreen((prev) => prev - 1);
        setWoody((prev) => prev - 1);
        setFloral((prev) => prev - 2);
        setFruity((prev) => prev - 2);
        setCitrus((prev) => prev - 2);
        setWhiteFloral((prev) => prev - 2);
        setVanilla((prev) => prev + 1);
        setSweet((prev) => prev + 1);
        setPowdery((prev) => prev + 1);
        setMusk((prev) => prev + 1);
        setSmokey((prev) => prev + 2);
        setLeather((prev) => prev + 2);
        setAroma((prev) => prev + 2);
        setAmber((prev) => prev + 2);
      }
    }
    if (questionIndex === 5) {
      if (index === 1) {
        setFresh((prev) => prev + 2);
        setAqua((prev) => prev + 2);
        setGreen((prev) => prev + 2);
        setWoody((prev) => prev + 2);
        setFloral((prev) => prev + 1);
        setFruity((prev) => prev + 1);
        setCitrus((prev) => prev + 1);
        setWhiteFloral((prev) => prev + 1);
        setVanilla((prev) => prev - 2);
        setSweet((prev) => prev - 2);
        setPowdery((prev) => prev - 2);
        setMusk((prev) => prev - 2);
        setSmokey((prev) => prev - 1);
        setLeather((prev) => prev - 1);
        setAroma((prev) => prev - 1);
        setAmber((prev) => prev - 1);
      }
      if (index === 2) {
        setFresh((prev) => prev + 1);
        setAqua((prev) => prev + 1);
        setGreen((prev) => prev + 1);
        setWoody((prev) => prev + 1);
        setFloral((prev) => prev + 2);
        setFruity((prev) => prev + 2);
        setCitrus((prev) => prev + 2);
        setWhiteFloral((prev) => prev + 2);
        setVanilla((prev) => prev - 1);
        setSweet((prev) => prev - 1);
        setPowdery((prev) => prev - 1);
        setMusk((prev) => prev - 1);
        setSmokey((prev) => prev - 2);
        setLeather((prev) => prev - 2);
        setAroma((prev) => prev - 2);
        setAmber((prev) => prev - 2);
      }
      if (index === 3) {
        setFresh((prev) => prev - 2);
        setAqua((prev) => prev - 2);
        setGreen((prev) => prev - 2);
        setWoody((prev) => prev - 2);
        setFloral((prev) => prev - 1);
        setFruity((prev) => prev - 1);
        setCitrus((prev) => prev - 1);
        setWhiteFloral((prev) => prev - 1);
        setVanilla((prev) => prev + 2);
        setSweet((prev) => prev + 2);
        setPowdery((prev) => prev + 2);
        setMusk((prev) => prev + 2);
        setSmokey((prev) => prev + 1);
        setLeather((prev) => prev + 1);
        setAroma((prev) => prev + 1);
        setAmber((prev) => prev + 1);
      }
      if (index === 4) {
        setFresh((prev) => prev - 1);
        setAqua((prev) => prev - 1);
        setGreen((prev) => prev - 1);
        setWoody((prev) => prev - 1);
        setFloral((prev) => prev - 2);
        setFruity((prev) => prev - 2);
        setCitrus((prev) => prev - 2);
        setWhiteFloral((prev) => prev - 2);
        setVanilla((prev) => prev + 1);
        setSweet((prev) => prev + 1);
        setPowdery((prev) => prev + 1);
        setMusk((prev) => prev + 1);
        setSmokey((prev) => prev + 2);
        setLeather((prev) => prev + 2);
        setAroma((prev) => prev + 2);
        setAmber((prev) => prev + 2);
      }
    }
    if (questionIndex === 6) {
      if (index === 1) {
        setFresh((prev) => prev + 2);
        setAqua((prev) => prev + 2);
        setGreen((prev) => prev + 2);
        setWoody((prev) => prev + 2);
        setFloral((prev) => prev + 1);
        setFruity((prev) => prev + 1);
        setCitrus((prev) => prev + 1);
        setWhiteFloral((prev) => prev + 1);
        setVanilla((prev) => prev - 2);
        setSweet((prev) => prev - 2);
        setPowdery((prev) => prev - 2);
        setMusk((prev) => prev - 2);
        setSmokey((prev) => prev - 1);
        setLeather((prev) => prev - 1);
        setAroma((prev) => prev - 1);
        setAmber((prev) => prev - 1);
      }
      if (index === 2) {
        setFresh((prev) => prev + 1);
        setAqua((prev) => prev + 1);
        setGreen((prev) => prev + 1);
        setWoody((prev) => prev + 1);
        setFloral((prev) => prev + 2);
        setFruity((prev) => prev + 2);
        setCitrus((prev) => prev + 2);
        setWhiteFloral((prev) => prev + 2);
        setVanilla((prev) => prev - 1);
        setSweet((prev) => prev - 1);
        setPowdery((prev) => prev - 1);
        setMusk((prev) => prev - 1);
        setSmokey((prev) => prev - 2);
        setLeather((prev) => prev - 2);
        setAroma((prev) => prev - 2);
        setAmber((prev) => prev - 2);
      }
      if (index === 3) {
        setFresh((prev) => prev - 2);
        setAqua((prev) => prev - 2);
        setGreen((prev) => prev - 2);
        setWoody((prev) => prev - 2);
        setFloral((prev) => prev - 1);
        setFruity((prev) => prev - 1);
        setCitrus((prev) => prev - 1);
        setWhiteFloral((prev) => prev - 1);
        setVanilla((prev) => prev + 2);
        setSweet((prev) => prev + 2);
        setPowdery((prev) => prev + 2);
        setMusk((prev) => prev + 2);
        setSmokey((prev) => prev + 1);
        setLeather((prev) => prev + 1);
        setAroma((prev) => prev + 1);
        setAmber((prev) => prev + 1);
      }
      if (index === 4) {
        setFresh((prev) => prev - 1);
        setAqua((prev) => prev - 1);
        setGreen((prev) => prev - 1);
        setWoody((prev) => prev - 1);
        setFloral((prev) => prev - 2);
        setFruity((prev) => prev - 2);
        setCitrus((prev) => prev - 2);
        setWhiteFloral((prev) => prev - 2);
        setVanilla((prev) => prev + 1);
        setSweet((prev) => prev + 1);
        setPowdery((prev) => prev + 1);
        setMusk((prev) => prev + 1);
        setSmokey((prev) => prev + 2);
        setLeather((prev) => prev + 2);
        setAroma((prev) => prev + 2);
        setAmber((prev) => prev + 2);
      }
    }
    if (questionIndex === 7) {
      if (index === 1) {
        setFresh((prev) => prev + 2);
        setAqua((prev) => prev + 2);
        setGreen((prev) => prev + 2);
        setWoody((prev) => prev + 2);
        setFloral((prev) => prev + 1);
        setFruity((prev) => prev + 1);
        setCitrus((prev) => prev + 1);
        setWhiteFloral((prev) => prev + 1);
        setVanilla((prev) => prev - 2);
        setSweet((prev) => prev - 2);
        setPowdery((prev) => prev - 2);
        setMusk((prev) => prev - 2);
        setSmokey((prev) => prev - 1);
        setLeather((prev) => prev - 1);
        setAroma((prev) => prev - 1);
        setAmber((prev) => prev - 1);
      }
      if (index === 2) {
        setFresh((prev) => prev + 1);
        setAqua((prev) => prev + 1);
        setGreen((prev) => prev + 1);
        setWoody((prev) => prev + 1);
        setFloral((prev) => prev + 2);
        setFruity((prev) => prev + 2);
        setCitrus((prev) => prev + 2);
        setWhiteFloral((prev) => prev + 2);
        setVanilla((prev) => prev - 1);
        setSweet((prev) => prev - 1);
        setPowdery((prev) => prev - 1);
        setMusk((prev) => prev - 1);
        setSmokey((prev) => prev - 2);
        setLeather((prev) => prev - 2);
        setAroma((prev) => prev - 2);
        setAmber((prev) => prev - 2);
      }
      if (index === 3) {
        setFresh((prev) => prev - 2);
        setAqua((prev) => prev - 2);
        setGreen((prev) => prev - 2);
        setWoody((prev) => prev - 2);
        setFloral((prev) => prev - 1);
        setFruity((prev) => prev - 1);
        setCitrus((prev) => prev - 1);
        setWhiteFloral((prev) => prev - 1);
        setVanilla((prev) => prev + 2);
        setSweet((prev) => prev + 2);
        setPowdery((prev) => prev + 2);
        setMusk((prev) => prev + 2);
        setSmokey((prev) => prev + 1);
        setLeather((prev) => prev + 1);
        setAroma((prev) => prev + 1);
        setAmber((prev) => prev + 1);
      }
      if (index === 4) {
        setFresh((prev) => prev - 1);
        setAqua((prev) => prev - 1);
        setGreen((prev) => prev - 1);
        setWoody((prev) => prev - 1);
        setFloral((prev) => prev - 2);
        setFruity((prev) => prev - 2);
        setCitrus((prev) => prev - 2);
        setWhiteFloral((prev) => prev - 2);
        setVanilla((prev) => prev + 1);
        setSweet((prev) => prev + 1);
        setPowdery((prev) => prev + 1);
        setMusk((prev) => prev + 1);
        setSmokey((prev) => prev + 2);
        setLeather((prev) => prev + 2);
        setAroma((prev) => prev + 2);
        setAmber((prev) => prev + 2);
      }
    }
    if (questionIndex === 8) {
      if (index === 1) {
        setFresh((prev) => prev + 5);
        setAqua((prev) => prev + 0);
        setGreen((prev) => prev + 0);
        setWoody((prev) => prev + 0);
        setFloral((prev) => prev + 0);
        setFruity((prev) => prev + 0);
        setCitrus((prev) => prev + 5);
        setWhiteFloral((prev) => prev + 0);
        setVanilla((prev) => prev + 0);
        setSweet((prev) => prev + 0);
        setPowdery((prev) => prev + 5);
        setMusk((prev) => prev + 0);
        setSmokey((prev) => prev + 0);
        setLeather((prev) => prev + 0);
        setAroma((prev) => prev + 5);
        setAmber((prev) => prev + 0);
      }
      if (index === 2) {
        setFresh((prev) => prev + 0);
        setAqua((prev) => prev + 5);
        setGreen((prev) => prev + 0);
        setWoody((prev) => prev + 0);
        setFloral((prev) => prev + 5);
        setFruity((prev) => prev + 0);
        setCitrus((prev) => prev + 0);
        setWhiteFloral((prev) => prev + 0);
        setVanilla((prev) => prev + 0);
        setSweet((prev) => prev + 5);
        setPowdery((prev) => prev + 0);
        setMusk((prev) => prev + 0);
        setSmokey((prev) => prev + 0);
        setLeather((prev) => prev + 5);
        setAroma((prev) => prev + 0);
        setAmber((prev) => prev + 0);
      }
      if (index === 3) {
        setFresh((prev) => prev + 0);
        setAqua((prev) => prev + 0);
        setGreen((prev) => prev + 5);
        setWoody((prev) => prev + 0);
        setFloral((prev) => prev + 0);
        setFruity((prev) => prev + 5);
        setCitrus((prev) => prev + 0);
        setWhiteFloral((prev) => prev + 0);
        setVanilla((prev) => prev + 0);
        setSweet((prev) => prev + 0);
        setPowdery((prev) => prev + 0);
        setMusk((prev) => prev + 5);
        setSmokey((prev) => prev + 5);
        setLeather((prev) => prev + 0);
        setAroma((prev) => prev + 0);
        setAmber((prev) => prev + 0);
      }
      if (index === 4) {
        setFresh((prev) => prev + 0);
        setAqua((prev) => prev + 0);
        setGreen((prev) => prev + 0);
        setWoody((prev) => prev + 5);
        setFloral((prev) => prev + 0);
        setFruity((prev) => prev + 0);
        setCitrus((prev) => prev + 0);
        setWhiteFloral((prev) => prev + 5);
        setVanilla((prev) => prev + 5);
        setSweet((prev) => prev + 0);
        setPowdery((prev) => prev + 0);
        setMusk((prev) => prev + 0);
        setSmokey((prev) => prev + 0);
        setLeather((prev) => prev + 0);
        setAroma((prev) => prev + 0);
        setAmber((prev) => prev + 5);
      }
    }

    setStep((prev) => prev + 1);
    setTimeout(() => {
      if (step === 8) {
        navigate('Tabs', { screen: 'Home' });
      }
    }, 3000);
  };

  const accordArr = [
    fresh,
    aqua,
    green,
    woody,
    floral,
    fruity,
    citrus,
    whiteFloral,
    vanilla,
    sweet,
    powdery,
    musk,
    smokey,
    leather,
    aroma,
    amber,
  ];

  const accordResultArr = [
    'fresh',
    'aqua',
    'green',
    'woody',
    'floral',
    'fruity',
    'citrus',
    'whiteFloral',
    'vanilla',
    'sweet',
    'powdery',
    'musk',
    'smokey',
    'leather',
    'aroma',
    'amber',
  ];

  useEffect(() => {
    const findLongestWord = (arr: number[], arrResult: string[]) => {
      const maxNumber = Math.max(...arr);
      const maxNumberIndex = arr.indexOf(maxNumber);
      return setResult(arrResult[maxNumberIndex]);
    };

    findLongestWord(accordArr, accordResultArr);
  }, [step]);

  return (
    <Container>
      <QuestionBox>
        {gameQuestion.map((data) =>
          step === data.id ? (
            <View key={data.id} style={{ flex: 1 }}>
              <ProgressBar step={step} totalStep={8} />
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                  {step}.{data.question}
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {gameAnswer.map((data) =>
                  step === data.id
                    ? data.answer.map((i) => (
                        <View key={i.id} style={{ flex: 1 }}>
                          <TouchableOpacityOnPressOptimized
                            onPress={onClickAnswer}
                            index={i.id}
                            questionIndex={data.questionId}
                          >
                            <Text>
                              {i.id}.{i.answer}
                            </Text>
                          </TouchableOpacityOnPressOptimized>
                        </View>
                      ))
                    : null
                )}
              </View>
            </View>
          ) : null
        )}
        {step === 9 ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>당신에게 어울리는 어코드는 {result}</Text>
          </View>
        ) : null}
      </QuestionBox>
    </Container>
  );
};

export default GamePage;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const QuestionBox = styled.View`
  width: 100%;
  height: 100%;
`;
