import '../styles/ListContacts.css';

function ListContacts({color, head1, content1, head2, content2, head3, content3}) {
    return (
        <div className={`listContacts ${color}`}>
            <div className="contact__wrapp">
                <svg className="contact__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M15.9993 7.58667L22.666 13.5867V24H19.9993V16H11.9993V24H9.33268V13.5867L15.9993 7.58667ZM15.9993 4L2.66602 16H6.66602V26.6667H14.666V18.6667H17.3327V26.6667H25.3327V16H29.3327L15.9993 4Z" />
                </svg>
                <div className="contact__content">
                    <div className="contact__head">
                        {head1}
                    </div>
                    <div className="contact__text">
                        {content1}
                    </div>
                </div>
            </div>
            <div className="contact__wrapp">
                <svg className="contact__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.666 10.6667H22.666V8.00004C22.666 6.53337 21.466 5.33337 19.9993 5.33337H11.9993C10.5327 5.33337 9.33268 6.53337 9.33268 8.00004V10.6667H5.33268C3.86602 10.6667 2.66602 11.8667 2.66602 13.3334V26.6667H29.3327V13.3334C29.3327 11.8667 28.1327 10.6667 26.666 10.6667ZM11.9993 8.00004H19.9993V10.6667H11.9993V8.00004ZM26.666 24H5.33268V20H7.99935V21.3334H10.666V20H21.3327V21.3334H23.9993V20H26.666V24ZM23.9993 17.3334V16H21.3327V17.3334H10.666V16H7.99935V17.3334H5.33268V13.3334H26.666V17.3334H23.9993Z" />
                </svg>
                <div className="contact__content">
                    <div className="contact__head">
                        {head2}
                    </div>
                    <div className="contact__text">
                        {content2}
                    </div>
                </div>
            </div>
            <div className="contact__wrapp">
                <svg className="contact__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M5.33268 5.33329H26.666V21.3333H6.89268L5.33268 22.8933V5.33329ZM5.33268 2.66663C3.86602 2.66663 2.67935 3.86663 2.67935 5.33329L2.66602 29.3333L7.99935 24H26.666C28.1327 24 29.3327 22.8 29.3327 21.3333V5.33329C29.3327 3.86663 28.1327 2.66663 26.666 2.66663H5.33268ZM7.99935 16H23.9993V18.6666H7.99935V16ZM7.99935 12H23.9993V14.6666H7.99935V12ZM7.99935 7.99996H23.9993V10.6666H7.99935V7.99996Z" />
                </svg>
                <div className="contact__content">
                    <div className="contact__head">
                        {head3}
                    </div>
                    <div className="contact__text">
                        {content3}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ListContacts;
