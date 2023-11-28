import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/weeklySchedule/Header";
import CarouselMenu from "../components/weeklySchedule/CarouselMenu";
import WarningNoPost from "../components/warningSign/WarningNoPost";
import WeekContent from "../components/weeklySchedule/WeekContent";
import InputBox from "../components/weeklySchedule/InputBox";
import { ACTIVE_MODE } from "../constants/constant";
import Toast from "../components/warningSign/Toast";

interface WeeklyItem {
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
        "1-Track your ovulation cycle to an idea of when you will be ovulating.",
      done: false,
    },
    {
      id: 2,
      weekNumber: 1,
      content: "1-Study about symptoms of ovulation",
      done: false,
    },
    {
      id: 3,
      weekNumber: 1,
      content: "1-Take folic acid",
      done: false,
    },
    {
      id: 4,
      weekNumber: 2,
      content: "2-Keep a record of your weight ",
      done: false,
    },
    {
      id: 5,
      weekNumber: 2,
      content: "2-Reduce caffeine intake ",
      done: false,
    },
    {
      id: 6,
      weekNumber: 2,
      content: "2-Take folic acid",
      done: false,
    },
    {
      id: 7,
      weekNumber: 3,
      content: "3-Get an at-home pregnancy test ",
      done: false,
    },
    {
      id: 8,
      weekNumber: 3,
      content: "3-Buy superfood that is good for pregnant women",
      done: false,
    },
    {
      id: 9,
      weekNumber: 3,
      content: "3-Take folic acid",
      done: false,
    },
    {
      id: 10,
      weekNumber: 4,
      content: "4-Eat leafy greens to increase iron intake. ",
      done: false,
    },
    {
      id: 11,
      weekNumber: 4,
      content: "4-Schedule an appointment with a OBGYN.",
      done: false,
    },
    {
      id: 12,
      weekNumber: 4,
      content: "4-Take folic acid",
      done: false,
    },
    {
      id: 13,
      weekNumber: 5,
      content: "5-Take folic acid",
      done: false,
    },
    {
      id: 14,
      weekNumber: 6,
      content: "6-Keep a record of your weight ",
      done: false,
    },
    {
      id: 15,
      weekNumber: 6,
      content: "6-Take folic acid",
      done: false,
    },
    {
      id: 16,
      weekNumber: 6,
      content: "6-Create a fiber-rich diet for better bowel movements. ",
      done: false,
    },
    {
      id: 17,
      weekNumber: 7,
      content: "7-Take folic acid",
      done: false,
    },
    {
      id: 18,
      weekNumber: 7,
      content: "7-Create a fiber-rich diet for better bowel movements. ",
      done: false,
    },
    {
      id: 19,
      weekNumber: 7,
      content: "7-Reduce caffeine intake ",
      done: false,
    },
    {
      id: 20,
      weekNumber: 8,
      content: "8-Reduce caffeine intake ",
      done: false,
    },
    {
      id: 21,
      weekNumber: 8,
      content: "8-Eat more calcium. ",
      done: false,
    },
    {
      id: 22,
      weekNumber: 9,
      content: "9-Consult your doctor about increasing the food portion. ",
      done: false,
    },
    {
      id: 23,
      weekNumber: 9,
      content: "9-Do light exercises",
      done: false,
    },
    {
      id: 24,
      weekNumber: 9,
      content: "9-Schedule a visit to the dentist",
      done: false,
    },
    {
      id: 25,
      weekNumber: 10,
      content: "10-Seek medical help if morning sickness is severe. ",
      done: false,
    },
    {
      id: 26,
      weekNumber: 10,
      content:
        "10-Before having any food, check to see if it's safe to consume during pregnancy. ",
      done: false,
    },
    {
      id: 27,
      weekNumber: 10,
      content:
        "10-Consider implenting a new diet plan to increase calcium consumption. ",
      done: false,
    },
    {
      id: 28,
      weekNumber: 11,
      content:
        "11-Ask your doctor about which medication is safe to take during pregnancy. ",
      done: false,
    },
    {
      id: 29,
      weekNumber: 11,
      content: "11-Eat iron-rich foods to prevent anemia. ",
      done: false,
    },
    {
      id: 30,
      weekNumber: 11,
      content: "11-Learn about the Down Syndrome screening. ",
      done: false,
    },
    {
      id: 31,
      weekNumber: 12,
      content:
        "12-Consider purchasing materinity pillows for your comfort in bed. ",
      done: false,
    },
    {
      id: 32,
      weekNumber: 13,
      content: "13-Consider storing the cord blood for the baby.  ",
      done: false,
    },
    {
      id: 33,
      weekNumber: 13,
      content:
        "13-Look for symptoms of UTIs, such as itchiness or burning sensation. ",
      done: false,
    },
    {
      id: 34,
      weekNumber: 13,
      content: "13-Get a pair of materinity tights for circulation. ",
      done: false,
    },
    {
      id: 35,
      weekNumber: 14,
      content:
        "14-Ask your doctor about if you need any supplements and medications. ",
      done: false,
    },
    {
      id: 36,
      weekNumber: 14,
      content: "14-Maintain a well-balanced diet. ",
      done: false,
    },
    {
      id: 37,
      weekNumber: 15,
      content: "15-Buy healthy snacks to catch up your increased appetite.",
      done: false,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(1);
  const weeklyTotal = Array.from(
    {
      length: [...new Set(weeklyList.map((v) => v.weekNumber))].length,
    },
    (v, i) => i + 1
  );
  const [editMode, setEditMode] = useState<ACTIVE_MODE>(ACTIVE_MODE.EDIT);
  const [slideDrection, setSlideDrection] = useState(1);
  const [isToastVisible, setToastVisible] = useState(false);
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
    const nextId =
      weeklyList.length > 0 ? Math.max(...weeklyList.map((v) => v.id)) + 1 : 1;
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
    const updateDoneItem = weeklyList.map((v) =>
      v.id === id ? { ...v, done: !v.done } : v
    );
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
    console.log(del);
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

  const onToastClose = () => {
    setToastVisible(false);
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["bottom"]}>
          <Toast
            message="Checklist deleted"
            isVisible={isToastVisible}
            onUndo={onUndo}
            onClose={onToastClose}
          />
          <KeyboardAvoidingView
            behavior={Platform.select({ ios: "padding" })}
            style={styles.avoid}
          >
            <Header editMode={editMode} onModeToggle={onModeToggle} />
            <CarouselMenu data={weeklyTotal} onSelectWeek={onSelectWeek} />
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
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  avoid: {
    flex: 1,
  },
});

export default WeeklySchedule;
