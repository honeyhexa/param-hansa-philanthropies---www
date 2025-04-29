"use client";

import { useState, useEffect, useRef, useMemo, FC } from "react";

import { SIZE_CLASS_NAMES } from "./animated-lines.data";
import { initLinesAnimation } from "./animated-lines.utils";
import { AnimatedLinesProps, ElementType, Size } from "./animated-lines.types";
import { cn } from "@/lib/utils";

import styles from "./animated-lines.module.scss";

export const AnimatedLines: FC<AnimatedLinesProps> = ({
  text,
  className,
  animationDelay,
  size = Size.LG,
  animateIntoView = true,
  intersectionThreshold,
  intersectionRootMargin,
  elementType,
  noTextTransform,
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
          dangerouslySetInnerHTML={{
            __html: `${word}${index < words.length - 1 ? " " : ""}`,
          }}
        >
          {/* {word} */}
          {/* {index < words.length - 1 && " "} */}
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
    initLinesAnimation({
      // @ts-expect-error type issue
      containerRef,
      staticReset,
      animationDelay,
      animateIntoView,
      intersectionThreshold,
      intersectionRootMargin,
    });
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
