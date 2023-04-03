import React from 'react';
import classes from './Calendar.module.scss';

interface CalendarProps {}

/**
 * Primary UI component for user interaction
 */
export const Calendar = ({}: CalendarProps) => {
  return (
    <div className={classes.calendar}>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F5F6F8&ctz=Asia%2FTokyo&showTitle=0&src=YjA4MzU5MWYwYzUwNGE0ZjY0ZjM0MjJmNzYyZTMwOTY3ZTFhMjIwODk4NDc0NjIyMGI4MWUyZTUwNWQ0ZmZiM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F4511E&color=%230B8043"
        style={{
          border: 0
        }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};
