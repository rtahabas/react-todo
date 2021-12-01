import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children,handleModal,isSalesModal }) {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{
                border:"4px solid",
                borderColor: isSalesModal ? "#31aab9": "#555",
                textAlign:"center"
            }}>
                {children}
            </div>
        </div>
    ), document.body)
}
