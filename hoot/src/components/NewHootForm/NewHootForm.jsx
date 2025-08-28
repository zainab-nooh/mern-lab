import { useState } from 'react';
import { createHoot } from '../../utilities/hoots-api';
import styles from './NewHootForm.module.scss';

export default function NewHootForm({ addHoot }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;
    try {
      const newHoot = await createHoot({ text });
      addHoot(newHoot); // add to feed instantly
      setText('');
    } catch (err) {
      console.error('Failed to create hoot:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit" className={styles.button}>Hoot</button>
    </form>
  );
}