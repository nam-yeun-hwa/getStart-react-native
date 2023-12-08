import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/weeklySchedule/Header';
import CarouselMenu from '../components/weeklySchedule/CarouselMenu';
import WarningNoPost from '../components/warningSign/WarningNoPost';
import WeekContent from '../components/weeklySchedule/WeekContent';
import InputBox from '../components/weeklySchedule/InputBox';
import { ACTIVE_MODE } from '../constants/constant';
import Toast from '../components/warningSign/Toast';

export interface WeeklyItem {
  id: number;
  weekNumber: number;
  content: string;
  done: boolean;
}

function WeeklySchedule() {
  const [weeklyList, setWeeklyList] = useState([
    {
      id: 1,
      weekNumber: 1,
      content:
        "Maybe I'll forget, maybe I won't. I'm stuck in the moment, and so far from home. Cause loving ",
      done: false,
    },
    {
      id: 2,
      weekNumber: 1,
      content: "nobody, is breaking my heart but you'll never know this, wherever you are.",
      done: false,
    },
    {
      id: 3,
      weekNumber: 1,
      content: 'easily but I know this is hard to see.',
      done: false,
    },
    {
      id: 4,
      weekNumber: 2,
      content: 'And I wish time would slow down. So I could keep your heart around.',
      done: false,
    },
    {
      id: 5,
      weekNumber: 2,
      content: "If I can't make you stay another day, I'll wait another day for you. For you.",
      done: false,
    },
    {
      id: 6,
      weekNumber: 2,
      content: "But I know time won't slow down.",
      done: false,
    },
    {
      id: 7,
      weekNumber: 3,
      content:
        'I saw your tear fall from your grace. I fell in love. I saw that fear when you showed me that kiss.',
      done: false,
    },
    {
      id: 8,
      weekNumber: 3,
      content: 'I make mistakes. I know things break. Hear me love you.',
      done: false,
    },
    {
      id: 9,
      weekNumber: 3,
      content: "Let me love you. I'll lay you down. I feel you now.",
      done: false,
    },
    {
      id: 10,
      weekNumber: 4,
      content:
        "All my lives I've seen, I'm thankful for this 'Cause you're my favorite place to bleed. ",
      done: false,
    },
    {
      id: 11,
      weekNumber: 4,
      content: "you bleed for me. Why don't you tell me what you need? ",
      done: false,
    },
    {
      id: 12,
      weekNumber: 4,
      content: 'I feel your heart pain, I feel your pain. I feel your heart baby.',
      done: false,
    },
    {
      id: 13,
      weekNumber: 5,
      content: 'I think you heard me wrong, I hear your eyes.',
      done: false,
    },
    {
      id: 14,
      weekNumber: 6,
      content: 'I think it came out wrong, a pillow of lies.',
      done: false,
    },
    {
      id: 15,
      weekNumber: 6,
      content: "Oh, baby please, my words are painful but we're building you and me. ",
      done: false,
    },
    {
      id: 16,
      weekNumber: 6,
      content: "Don't cry that way.",
      done: false,
    },
    {
      id: 17,
      weekNumber: 7,
      content: "Don't let that devil get you down. I wanna see your smile.",
      done: false,
    },
    {
      id: 18,
      weekNumber: 7,
      content:
        "Maybe I'll forget, maybe I won't. I'm stuck in the moment, and so far from home. Cause loving ",
      done: false,
    },
    {
      id: 19,
      weekNumber: 7,
      content: 'I make mistakes. I know things break. Hear me love you.',
      done: false,
    },
    {
      id: 20,
      weekNumber: 8,
      content: 'easily but I know this is hard to see.',
      done: false,
    },
    {
      id: 21,
      weekNumber: 8,
      content: "nobody, is breaking my heart but you'll never know this, wherever you are.",
      done: false,
    },
    {
      id: 22,
      weekNumber: 9,
      content: 'I think you heard me wrong, I hear your eyes.',
      done: false,
    },
    {
      id: 23,
      weekNumber: 9,
      content:
        "Maybe I'll forget, maybe I won't. I'm stuck in the moment, and so far from home. Cause loving ",
      done: false,
    },
    {
      id: 24,
      weekNumber: 9,
      content: "Don't let that devil get you down. I wanna see your smile.",
      done: false,
    },
    {
      id: 25,
      weekNumber: 10,
      content:
        "Maybe I'll forget, maybe I won't. I'm stuck in the moment, and so far from home. Cause loving ",
      done: false,
    },
    {
      id: 26,
      weekNumber: 10,
      content: 'I make mistakes. I know things break. Hear me love you.',
      done: false,
    },
    {
      id: 27,
      weekNumber: 10,
      content: 'easily but I know this is hard to see.',
      done: false,
    },
    {
      id: 28,
      weekNumber: 11,
      content: "Don't let that devil get you down. I wanna see your smile.",
      done: false,
    },
    {
      id: 29,
      weekNumber: 11,
      content:
        "Maybe I'll forget, maybe I won't. I'm stuck in the moment, and so far from home. Cause loving ",
      done: false,
    },
    {
      id: 30,
      weekNumber: 11,
      content: "nobody, is breaking my heart but you'll never know this, wherever you are.",
      done: false,
    },
    {
      id: 31,
      weekNumber: 12,
      content: 'I think you heard me wrong, I hear your eyes.',
      done: false,
    },
    {
      id: 32,
      weekNumber: 13,
      content: 'And I wish time would slow down. So I could keep your heart around.',
      done: false,
    },
    {
      id: 33,
      weekNumber: 13,
      content: "Don't let that devil get you down. I wanna see your smile.",
      done: false,
    },
    {
      id: 34,
      weekNumber: 13,
      content: 'I feel your heart pain, I feel your pain. I feel your heart baby.',
      done: false,
    },
    {
      id: 35,
      weekNumber: 14,
      content: "nobody, is breaking my heart but you'll never know this, wherever you are.",
      done: false,
    },
    {
      id: 36,
      weekNumber: 14,
      content: "Don't let that devil get you down. I wanna see your smile.",
      done: false,
    },
    {
      id: 37,
      weekNumber: 15,
      content: 'I think you heard me wrong, I hear your eyes.',
      done: false,
    },
  ]);

  const weeklyTotal = 15;
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [editMode, setEditMode] = useState<ACTIVE_MODE>(ACTIVE_MODE.EDIT);
  const [slideDrection, setSlideDrection] = useState<number>(1);
  const [isToastVisible, setToastVisible] = useState<boolean>(false);
  const [delItem, setDelItem] = useState<WeeklyItem>();

  /**
   * @description Active 였던 인덱스를 저장
   */
  useEffect(() => {
    return () => {
      setSlideDrection(currentIndex);
    };
  }, [currentIndex]);

  /**
   * @function onSelectWeek
   * @param select 선택된 week
   * @description 캐러셀에서 현재 선택된 index
   */
  const onSelectWeek = (select: number) => {
    setCurrentIndex(select);
  };

  /**
   * @function onInsert 항목추가
   * @param text
   * @description 현재 week list 항목 추가
   */
  const onInsert = (text: string) => {
    const nextId = weeklyList.length > 0 ? Math.max(...weeklyList.map((v) => v.id)) + 1 : 1;
    const weekItem = {
      id: nextId,
      weekNumber: currentIndex,
      content: text,
      done: false,
    };

    setWeeklyList(weeklyList.concat(weekItem));
  };

  /**
   * @function onDone
   * @param id
   * @description 리스트아이템 완료 체크
   */
  const onDone = (id: number) => {
    const updateDoneItem = weeklyList.map((v) => (v.id === id ? { ...v, done: !v.done } : v));
    setWeeklyList(updateDoneItem);
  };

  /**
   * @function onRemove
   * @param id
   * @description 리스트 아이템 삭제
   */
  const onRemove = (id: number) => {
    const updateDelItem = weeklyList.filter((v) => v.id !== id);
    setWeeklyList(updateDelItem);

    let del = weeklyList.find((v) => v.id === id);
    setDelItem(del);
    showToast();
  };

  /**
   * @description 헤더의 오른쪽 EDIT와 DONE 모드를 구분
   * @param activeMode
   */
  const onModeToggle = (activeMode: ACTIVE_MODE) => {
    setEditMode(activeMode);
  };

  /**
   * @function showToast
   * @description 토스트 오픈
   */
  const showToast = () => {
    setToastVisible(true);
  };

  /**
   * @function onUndo
   * @description 삭제 되돌리기
   */
  const onUndo = () => {
    setToastVisible(false);

    if (delItem) {
      const weekItem = {
        id: delItem.id,
        weekNumber: delItem.weekNumber,
        content: delItem.content,
        done: delItem.done,
      };
      setWeeklyList(weeklyList.concat(weekItem));
    }
  };

  /**
   * @function onToastClose
   * @description 토스트 팝업 닫기
   */
  const onToastClose = () => {
    setToastVisible(false);
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['bottom']}>
          {/* 토스트 팝업 : start */}
          <Toast
            message="Checklist deleted"
            isVisible={isToastVisible}
            onUndo={onUndo}
            onClose={onToastClose}
          />
          {/* 토스트 팝업 : end */}
          {/* WeeklySchedule : start */}
          <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })} style={styles.avoid}>
            <Header editMode={editMode} onModeToggle={onModeToggle} />
            <CarouselMenu weeklyTotal={weeklyTotal} onSelectWeek={onSelectWeek} />
            {weeklyList.length === 0 ? (
              <WarningNoPost />
            ) : (
              <WeekContent
                data={weeklyList
                  .filter((v) => v.weekNumber === currentIndex)
                  .sort((a, b) => b.id - a.id)}
                slideDirection={currentIndex - slideDrection}
                mode={editMode}
                onDone={onDone}
                onRemove={onRemove}
              />
            )}
            <InputBox onInsert={onInsert} />
          </KeyboardAvoidingView>
          {/* WeeklySchedule : end */}
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default WeeklySchedule;
