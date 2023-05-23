import React from 'react'
import "../Component/Contact.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export class PhoneInputGfg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phone: "" };
    }
    render() {
        return (
            <div >
                <PhoneInput
                    country={'us'}
                    value={this.state.phone}
                    onChange={phone => this.setState({ phone })}
                />
            </div>
        );
    }
};
export default function Contact() {
    return (
        <div className='contact-info-container'>
            <div className='contact-info-body'>
                <div className='contact-info-details-container'>
                    <div className='contact-info-block'>
                        <div className='contact-info-header'>Contact Information</div>
                        <div className='contact-info-info-body'>
                            <div className='contact-info-info-container'>
                                <div className='contact-info-info-icon'>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.64288 15.0273L15.7857 20.1117L22.9286 15.0273" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7063 2.03719C15.0333 1.83771 15.4063 1.73291 15.7857 1.73291C16.1651 1.73291 16.5381 1.83771 16.8651 2.03719L17.221 1.45389L16.8651 2.03719L28.2937 9.01008C28.6053 9.20021 28.8646 9.47008 29.0453 9.79456C29.226 10.1191 29.3214 10.4866 29.3214 10.8612V26.649C29.3214 27.2246 29.0964 27.7742 28.6998 28.1775C28.3037 28.5804 27.769 28.8043 27.2143 28.8043H4.35714C3.80238 28.8043 3.26776 28.5804 2.87159 28.1775C2.475 27.7742 2.25 27.2246 2.25 26.649V25.7686H0.75V26.649C0.75 27.6144 1.12704 28.5428 1.80209 29.2293C2.47756 29.9161 3.39638 30.3043 4.35714 30.3043H27.2143C28.175 30.3043 29.0939 29.9161 29.7693 29.2293C30.4444 28.5428 30.8214 27.6144 30.8214 26.649L30.8214 10.8612C30.8214 10.2323 30.6613 9.6135 30.3559 9.06487C30.0503 8.51615 29.6095 8.05574 29.0749 7.7296L17.6463 0.756714C17.0852 0.414343 16.442 0.23291 15.7857 0.23291C15.1294 0.23291 14.4862 0.414343 13.9251 0.756714L2.49651 7.7296L2.49651 7.7296C1.96198 8.05574 1.52108 8.51616 1.21557 9.06487C0.9101 9.6135 0.749994 10.2323 0.75 10.8612V19.7686H2.25V10.8612C2.25 10.4866 2.34542 10.1191 2.52612 9.79456C2.70679 9.47008 2.96616 9.20021 3.27777 9.01008L14.7063 2.03719L14.3157 1.39695L14.7063 2.03719Z" fill="#fff"></path></svg>
                                </div>
                                <div>
                                    <div class="contact-info-title">Email:</div>
                                    <div class="contact-info-details">sales@goldanProparties.com</div>
                                </div>
                            </div>
                            <div className='contact-info-info-container'>
                                <div className='contact-info-info-icon'>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.0088 14.2516C27.3198 14.3457 27.6502 14.1702 27.7236 13.8537C28.0211 12.5726 28.0337 11.2379 27.7577 9.94112C27.4406 8.45127 26.7525 7.05821 25.7553 5.88737C24.7581 4.71652 23.4832 3.80467 22.0453 3.23391C20.7901 2.73565 19.4451 2.511 18.1035 2.57265C17.7811 2.58746 17.5508 2.87997 17.5904 3.20025C17.6291 3.5139 17.9126 3.73621 18.2284 3.72387C19.3819 3.67883 20.537 3.87577 21.6162 4.30416C22.8727 4.80293 23.9868 5.59979 24.8583 6.62297C25.7297 7.64616 26.331 8.86354 26.6082 10.1655C26.8442 11.2744 26.8387 12.4149 26.5948 13.5123C26.5244 13.8295 26.6979 14.1575 27.0088 14.2516Z" fill="#fff"></path><mask id="path-2-inside-1_46_168" fill="white"><path d="M22.6297 12.7021C22.8018 12.7484 22.9805 12.6466 23.0114 12.4711C23.0973 11.9847 23.0834 11.4847 22.9695 11.0018C22.8307 10.4139 22.548 9.86979 22.1466 9.41839C21.7453 8.96698 21.238 8.62248 20.6704 8.41591C20.2041 8.24622 19.7092 8.17398 19.2161 8.20229C19.0381 8.21251 18.9161 8.37799 18.9421 8.55434C18.968 8.73068 19.1321 8.85078 19.3102 8.84396C19.697 8.82915 20.084 8.88938 20.4496 9.02245C20.9166 9.19241 21.334 9.47585 21.6643 9.84726C21.9945 10.2187 22.2271 10.6664 22.3413 11.1501C22.4306 11.5287 22.4452 11.9202 22.3852 12.3025C22.3576 12.4786 22.4576 12.6557 22.6297 12.7021Z"></path></mask><path d="M22.6297 12.7021C22.8018 12.7484 22.9805 12.6466 23.0114 12.4711C23.0973 11.9847 23.0834 11.4847 22.9695 11.0018C22.8307 10.4139 22.548 9.86979 22.1466 9.41839C21.7453 8.96698 21.238 8.62248 20.6704 8.41591C20.2041 8.24622 19.7092 8.17398 19.2161 8.20229C19.0381 8.21251 18.9161 8.37799 18.9421 8.55434C18.968 8.73068 19.1321 8.85078 19.3102 8.84396C19.697 8.82915 20.084 8.88938 20.4496 9.02245C20.9166 9.19241 21.334 9.47585 21.6643 9.84726C21.9945 10.2187 22.2271 10.6664 22.3413 11.1501C22.4306 11.5287 22.4452 11.9202 22.3852 12.3025C22.3576 12.4786 22.4576 12.6557 22.6297 12.7021Z" fill="#fff" stroke="black" stroke-width="2" mask="url(#path-2-inside-1_46_168)"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50028 10.7463L6.85554 11.5072L7.30785 12.3962C9.87755 17.4463 14.0723 21.1771 19.0134 23.7088L20.0057 24.2172L20.7786 23.4135L22.499 21.6244C22.5193 21.6058 22.5446 21.5924 22.5729 21.5859C22.6043 21.5786 22.6302 21.5817 22.6468 21.5875L22.6548 21.5902L22.6628 21.5928C24.6809 22.2595 26.8564 22.6186 29.0833 22.6186C29.1245 22.6186 29.165 22.634 29.1998 22.6688C29.2345 22.7036 29.25 22.7441 29.25 22.7852V28.6019C29.25 28.6431 29.2345 28.6836 29.1998 28.7183C29.165 28.7531 29.1245 28.7686 29.0833 28.7686C19.6847 28.7686 11.4159 23.9386 6.62331 16.6249L5.139 17.0911C10.1625 25.0119 19.0081 30.2686 29.0833 30.2686C30 30.2686 30.75 29.5186 30.75 28.6019V22.7852C30.75 21.8686 30 21.1186 29.0833 21.1186C27.0167 21.1186 25 20.7852 23.1333 20.1686C22.55 19.9686 21.8833 20.1186 21.4333 20.5686L19.6974 22.3738C14.9807 19.9572 11.0447 16.4326 8.64474 11.7159L10.45 9.58522C10.9167 9.11856 11.05 8.46856 10.8667 7.88522C10.25 6.01856 9.91667 4.01855 9.91667 1.93522C9.91667 1.01855 9.16667 0.268555 8.25 0.268555H2.41667C1.5 0.268555 0.75 1.01855 0.75 1.93522C0.75 5.70015 1.48404 9.29339 2.81683 12.5797L4.25325 12.1285C2.96202 8.98582 2.25 5.5438 2.25 1.93522C2.25 1.89405 2.26549 1.85355 2.30024 1.8188C2.335 1.78404 2.3755 1.76855 2.41667 1.76855H8.25C8.29117 1.76855 8.33167 1.78404 8.36642 1.8188C8.40118 1.85356 8.41667 1.89405 8.41667 1.93522C8.41667 4.17381 8.77408 6.32738 9.43734 8.34049C9.44827 8.37844 9.44756 8.41147 9.44155 8.43715C9.43593 8.46115 9.42324 8.49067 9.38934 8.52456L9.34557 8.56834L9.30555 8.61557L7.50028 10.7463Z" fill="#fff"></path></svg>
                                </div>
                                <div>
                                    <div class="contact-info-title">Phone:</div>
                                    <div class="contact-info-details">+918792694702 | +918496894702</div>
                                </div>
                            </div>
                            <div className='contact-info-info-container'>
                                <div className='contact-info-info-icon'>
                                    <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.5745 15.8522C20.5745 19.0369 18.1423 21.5466 15.2284 21.5466C12.3146 21.5466 9.88232 19.0369 9.88232 15.8522C9.88232 12.6674 12.3146 10.1577 15.2284 10.1577C18.1423 10.1577 20.5745 12.6674 20.5745 15.8522Z" stroke="#fff" stroke-width="1.5"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4356 5.90005L24.4393 5.90369C25.6427 7.11378 26.6013 8.56165 27.2566 10.1634C27.9119 11.7651 28.25 13.4871 28.25 15.2276C28.25 16.9681 27.9119 18.69 27.2566 20.2918C26.6013 21.8935 25.6427 23.3414 24.4393 24.5515L24.4356 24.5551L15.2492 33.8561L6.06448 24.5552L6.06073 24.5515C5.64181 24.1302 5.25257 23.6802 4.89545 23.2049L3.09515 23.2424C3.64468 24.0962 4.28183 24.8899 4.99716 25.6092L14.195 34.9234L15.2491 35.9908L16.3032 34.9235L25.5028 25.6092C26.8472 24.2574 27.9155 22.6426 28.6449 20.8598C29.3743 19.0769 29.75 17.162 29.75 15.2276C29.75 13.2931 29.3743 11.3782 28.6449 9.5954C27.9155 7.81256 26.8472 6.19777 25.5028 4.84595C19.8403 -0.8868 10.6596 -0.8868 4.99716 4.84595C3.65275 6.19777 2.58446 7.81256 1.85509 9.5954C1.12573 11.3782 0.75 13.2931 0.75 15.2276C0.75 16.2126 0.847428 17.1926 1.03937 18.1527L2.56544 18.1209C2.35638 17.1743 2.25 16.2038 2.25 15.2276C2.25 13.4871 2.58811 11.7651 3.24341 10.1634C3.89867 8.56165 4.85727 7.11378 6.06073 5.90369L6.06434 5.90005C11.1396 0.761833 19.3604 0.761833 24.4356 5.90005Z" fill="#fff"></path></svg>
                                </div>
                                <div>
                                    <div class="contact-info-title">Location:</div>
                                    <div class="contact-info-details">No-657, 3rd Stage, 3rd Block, Basaveshwara Nagar, Bangalore-560079</div>
                                </div>
                            </div>
                        </div>
                        <div className='follow-us-block'>
                            <div className="contact-info-sub-header">Follow Us</div>
                            <div className='contact-info-container-social-icon'>
                                <div className='icon-section'>
                                    <a href="https://www.facebook.com/" target="_new"><svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="33.336" height="31.9972" rx="15.9986" fill="white"></rect><path d="M21.065 24.9972V16.8012H23.83L24.241 13.5922H21.065V11.5482C21.065 10.6222 21.323 9.98817 22.652 9.98817H24.336V7.12717C23.5166 7.03936 22.693 6.99696 21.869 7.00017C19.425 7.00017 17.747 8.49217 17.747 11.2312V13.5862H15V16.7952H17.753V24.9972H21.065Z" fill="#0F461E"></path></svg></a>
                                </div>
                                <div className='icon-section'>
                                    <a href="https://www.twitter.com/" target="_new">
                                        <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.335999" width="32.7743" height="32.5844" rx="16.2922" fill="white"></rect>
                                            <path d="M25.436 10.8898C24.7951 11.1738 24.1067 11.3656 23.383 11.4523C24.1298 11.0055 24.6884 10.3023 24.9548 9.47387C24.2532 9.89058 23.4854 10.1839 22.6847 10.3411C22.1462 9.76616 21.433 9.3851 20.6558 9.25705C19.8786 9.129 19.0808 9.26113 18.3864 9.63292C17.692 10.0047 17.1397 10.5954 16.8154 11.3132C16.4911 12.031 16.4128 12.8358 16.5927 13.6027C15.1712 13.5313 13.7805 13.1618 12.511 12.5182C11.2415 11.8746 10.1215 10.9713 9.22376 9.8668C8.91678 10.3963 8.74027 11.0103 8.74027 11.6641C8.73993 12.2528 8.88488 12.8324 9.16227 13.3515C9.43966 13.8707 9.84091 14.3134 10.3304 14.6403C9.76272 14.6222 9.20755 14.4688 8.71111 14.1929V14.2389C8.71105 15.0645 8.99662 15.8646 9.51937 16.5036C10.0421 17.1426 10.7698 17.5811 11.579 17.7446C11.0524 17.8871 10.5003 17.9081 9.96434 17.806C10.1927 18.5163 10.6374 19.1375 11.2363 19.5825C11.8352 20.0276 12.5582 20.2742 13.3042 20.2879C12.0378 21.282 10.4738 21.8213 8.86383 21.8189C8.57864 21.819 8.29368 21.8023 8.01044 21.769C9.64468 22.8198 11.5471 23.3775 13.49 23.3753C20.0669 23.3753 23.6624 17.928 23.6624 13.2036C23.6624 13.0501 23.6586 12.8951 23.6517 12.7416C24.351 12.2359 24.9547 11.6096 25.4344 10.8921L25.436 10.8898Z" fill="#0F461E"></path></svg></a>
                                </div>
                                <div className='icon-section'>
                                    <a href="https://www.instagram.com/" target="_new">
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.110352" width="32.2325" height="32.2325" rx="16.1163" fill="white"></rect>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7463 7.72497C13.6465 7.68353 13.9335 7.67432 16.2266 7.67432C18.5198 7.67432 18.8068 7.68429 19.7062 7.72497C20.6057 7.76564 21.2196 7.90915 21.7568 8.11713C22.3194 8.32971 22.8297 8.66201 23.2518 9.09178C23.6816 9.51311 24.0131 10.0227 24.2249 10.586C24.4337 11.1232 24.5764 11.7371 24.6178 12.6351C24.6593 13.5368 24.6685 13.8238 24.6685 16.1162C24.6685 18.4093 24.6585 18.6963 24.6178 19.5965C24.5772 20.4944 24.4337 21.1084 24.2249 21.6456C24.0131 22.209 23.681 22.7194 23.2518 23.1413C22.8297 23.5711 22.3194 23.9026 21.7568 24.1144C21.2196 24.3232 20.6057 24.4659 19.7078 24.5074C18.8068 24.5488 18.5198 24.558 16.2266 24.558C13.9335 24.558 13.6465 24.548 12.7463 24.5074C11.8484 24.4667 11.2344 24.3232 10.6972 24.1144C10.1339 23.9026 9.62344 23.5705 9.20149 23.1413C8.77201 22.7197 8.43966 22.2096 8.2276 21.6463C8.01963 21.1091 7.87688 20.4952 7.83544 19.5973C7.794 18.6955 7.78479 18.4085 7.78479 16.1162C7.78479 13.8231 7.79477 13.536 7.83544 12.6366C7.87612 11.7371 8.01963 11.1232 8.2276 10.586C8.43997 10.0227 8.77258 9.51258 9.20225 9.09101C9.62361 8.66163 10.1335 8.32928 10.6965 8.11713C11.2337 7.90915 11.8484 7.76641 12.7463 7.72497ZM19.6379 9.2445C18.7477 9.20383 18.4806 9.19538 16.2266 9.19538C13.9727 9.19538 13.7056 9.20383 12.8154 9.2445C11.9919 9.28211 11.5453 9.41948 11.2475 9.53536C10.8538 9.68885 10.5721 9.87073 10.2767 10.1662C9.99659 10.4387 9.78104 10.7704 9.64583 11.137C9.52995 11.4348 9.39258 11.8814 9.35497 12.7049C9.3143 13.5951 9.30586 13.8622 9.30586 16.1162C9.30586 18.3701 9.3143 18.6372 9.35497 19.5274C9.39258 20.3509 9.52995 20.7976 9.64583 21.0953C9.7809 21.4614 9.99656 21.7937 10.2767 22.0661C10.5491 22.3463 10.8814 22.5619 11.2475 22.697C11.5453 22.8129 11.9919 22.9502 12.8154 22.9878C13.7056 23.0285 13.9719 23.037 16.2266 23.037C18.4814 23.037 18.7477 23.0285 19.6379 22.9878C20.4614 22.9502 20.908 22.8129 21.2058 22.697C21.5995 22.5435 21.8811 22.3616 22.1766 22.0661C22.4567 21.7937 22.6724 21.4614 22.8074 21.0953C22.9233 20.7976 23.0607 20.3509 23.0983 19.5274C23.139 18.6372 23.1474 18.3701 23.1474 16.1162C23.1474 13.8622 23.139 13.5951 23.0983 12.7049C23.0607 11.8814 22.9233 11.4348 22.8074 11.137C22.654 10.7433 22.4721 10.4617 22.1766 10.1662C21.9041 9.88614 21.5724 9.67059 21.2058 9.53536C20.908 9.41948 20.4614 9.28211 19.6379 9.2445ZM13.1584 13.0479C13.5613 12.645 14.0397 12.3254 14.5661 12.1073C15.0926 11.8893 15.6568 11.777 16.2266 11.777C16.7965 11.777 17.3607 11.8893 17.8872 12.1073C18.4136 12.3254 18.8919 12.645 19.2949 13.0479C19.6978 13.4509 20.0174 13.9292 20.2355 14.4557C20.4535 14.9821 20.5658 15.5463 20.5658 16.1162C20.5658 16.686 20.4535 17.2502 20.2355 17.7767C20.0174 18.3031 19.6978 18.7815 19.2949 19.1844C18.4811 19.9981 17.3775 20.4553 16.2266 20.4553C15.0758 20.4553 13.9722 19.9981 13.1584 19.1844C12.3447 18.3707 11.8875 17.267 11.8875 16.1162C11.8875 14.9654 12.3447 13.8617 13.1584 13.0479ZM21.5281 12.4232C21.628 12.3291 21.7079 12.2158 21.7632 12.0902C21.8185 11.9645 21.848 11.8291 21.85 11.6918C21.852 11.5546 21.8264 11.4183 21.7748 11.2911C21.7232 11.1639 21.6466 11.0484 21.5496 10.9513C21.4525 10.8543 21.337 10.7777 21.2098 10.7261C21.0826 10.6745 20.9463 10.6489 20.8091 10.6509C20.6718 10.6529 20.5364 10.6824 20.4108 10.7377C20.2851 10.793 20.1718 10.8729 20.0777 10.9728C19.8945 11.167 19.7942 11.4249 19.7981 11.6918C19.802 11.9587 19.9097 12.2136 20.0985 12.4024C20.2873 12.5912 20.5422 12.6989 20.8091 12.7028C21.076 12.7067 21.3339 12.6064 21.5281 12.4232Z" fill="#0F461E"></path></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-info-form-container'>
                    <div class="contact-info-header" Style="color: rgb(9, 9, 9);">Let us know about you</div>
                    <div className='contact-info-form-section'>
                        <div className='contact-info-form-input-container'>
                            <div class="contact-info-form-title">Full Name</div>
                            <div>
                                <input class="contact-info-form-input" placeholder="Eg. Kiran Kumar" value="" fdprocessedid="3ks1p"></input>
                            </div>
                        </div>
                        <div className='contact-info-form-input-container'>
                            <div class="contact-info-form-title">Phone Number</div>
                            <div className='phone'>
                                <PhoneInputGfg></PhoneInputGfg>
                                
                            </div>

                        </div>
                        <div className='contact-info-form-input-container'>
                            <div class="contact-info-form-title">Email</div>
                            <div>
                                <input class="contact-info-form-input" placeholder="Eg. kirankumar1234@gmail.com" value="" fdprocessedid="tiihxu" />
                            </div>
                        </div>
                        <div className='contact-info-form-input-container'>
                            <div class="contact-info-form-title">Message</div>
                            <div>
                                <textarea placeholder="message" class="contact-info-form-input" Style="height: 100px;"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='contact-info-button-block'>
                        <button class="contact-info-form-button">CONNECT</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
