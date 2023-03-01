import { forwardRef, useEffect, useRef, useState } from "react";
import { Toast } from "bootstrap";

// Firebase
import { addDoc } from "firebase/firestore";
import getFirebase, { createCollection } from "../../../firebase";

// Message Toast
interface IMessageProps {}
const Message = forwardRef<HTMLDivElement>(function Message(
  props: IMessageProps,
  ref
) {
  return (
    <div className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
      <div
        ref={ref}
        id="liveToast"
        className="toast"
        style={{ fontSize: "1.6rem" }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Message Sent</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">
          Thanks, now I know your need. I'll be in touch very soon!
        </div>
      </div>
    </div>
  );
});

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toastRef = useRef<HTMLDivElement>(null);
  const bsToastRef = useRef<Toast>();

  useEffect(() => {
    const toastElement = toastRef.current;
    if (toastElement) {
      let bsToast = Toast.getInstance(toastElement);
      if (!bsToast) {
        // initialize Toast
        bsToastRef.current = new Toast(toastElement);
      }
    }
  }, []);

  const sendMessage = (e: React.MouseEvent) => {
    if (name && email && message) {
      e.preventDefault();

      // Add message to Firestore
      type Message = {
        name: string;
        email: string;
        message: string;
      };

      const { db } = getFirebase();

      try {
        const messagesCol = createCollection<Message>(db, "messages");
        const messageData: Message = { name, email, message };
        addDoc(messagesCol, messageData).then(() => {
          bsToastRef?.current?.show();
        });
      } catch (e) {
        console.error("Error adding message: ", e);
      }
    }
  };

  return (
    <>
      {/* PAGE ANCHOR */}
      <p className="subtitle" id="contact">
        Contact Me
      </p>
      {/* CONTACT SECTION */}
      <section className="contact grid__2col-sm-up">
        <picture>
          <source
            srcSet="/images/mediamodifier-mk1GMRfkO5U-unsplash.webp 495w, /images/mediamodifier-mk1GMRfkO5U-unsplash@2x.webp 990w"
            sizes="50vw"
            type="image/webp"
          />
          <source
            srcSet="/images/mediamodifier-mk1GMRfkO5U-unsplash.png 495w, /images/mediamodifier-mk1GMRfkO5U-unsplash@2x.png 990w"
            sizes="50vw"
            type="image/png"
          />
          <img
            src="/images/mediamodifier-mk1GMRfkO5U-unsplash.png"
            alt="Blank screen smartphone being holded by two hands"
            className="contact__image"
          />
        </picture>
        <form className="form">
          <p>Tell me how I can help YOU change the world:</p>
          <div className="form__input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="form__input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="form__input">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              rows={10}
              required
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            ></textarea>
          </div>
          <button
            className="button form__button"
            onClick={(e) => sendMessage(e)}
            type="submit"
          >
            Send Message
          </button>
        </form>
        <Message ref={toastRef} />
      </section>
      {/* END CONTACT SECTION */}
    </>
  );
}
