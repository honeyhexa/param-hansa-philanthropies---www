"use client";

import { useState, useEffect, useRef, useMemo, FC } from "react";
import { cn } from "@/utils";

import { SIZE_CLASS_NAMES } from "./AnimatedLines.data";
import { initLinesAnimation } from "./AnimatedLines.utils";
import { AnimatedLinesProps, ElementType } from "./AnimatedLines.types";
import styles from "./AnimatedLines.module.scss";

export const AnimatedLines: FC<AnimatedLinesProps> = ({
  text,
  className,
  animationDelay,
  size,
  animateIntoView = true,
  intersectionThreshold,
  intersectionRootMargin,
  elementType,
  noTextTransform,
  animate = false,
}) => {

  const [animationsCleanUp, setAnimationsCleanUp] = useState(false);
  const words = useMemo(() => text.split(" "), [text]);
  const [initialWords] = useState(words);
  const sizeClassName = size && SIZE_CLASS_NAMES[size];

  const containerRef = useRef<HTMLParagraphElement | HTMLHeadingElement>(null);

  const wordsRender = (
    <>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn({ [styles.passive]: !animationsCleanUp })}
        >
          {word}
          {index < words.length - 1 && " "}
        </span>
      ))}
      {!animationsCleanUp && (
        <span className={styles.animatedLines} aria-hidden="true" />
      )}
    </>
  );

  const staticReset = () => {
    setAnimationsCleanUp(true);
  };

  useEffect(() => {
    if (words !== initialWords && !animationsCleanUp) {
      staticReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words]);

  useEffect(() => {
    if(animate) {

      initLinesAnimation({
        containerRef,
        staticReset,
        animationDelay,
        animateIntoView,
        intersectionThreshold,
        intersectionRootMargin,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (elementType === ElementType.HEADING) {
    return (
      <h4
        ref={containerRef}
        className={cn(styles.animatedLinesContainer, className, sizeClassName, {
          [styles.noTextTransform]: noTextTransform,
        })}
      >
        {wordsRender}
      </h4>
    );
  }

  if (elementType === ElementType.SPAN) {
    return (
      <span
        ref={containerRef}
        className={cn(styles.animatedLinesContainer, className, sizeClassName, {
          [styles.noTextTransform]: noTextTransform,
        })}
      >
        {wordsRender}
      </span>
    );
  }

  if(animate === false) {
    return text;
  }

  return (
    <p
      ref={containerRef}
      className={cn(styles.animatedLinesContainer, className, sizeClassName, {
        [styles.noTextTransform]: noTextTransform,
      })}
    >
      {wordsRender}
    </p>
  );
};
