import React, { Component } from 'react';
import styles from './ImageTile.module.scss';

import SimpleModal from '../SimpleModal/SimpleModal';

export default class ImageTile extends Component {

  state = {
    openModal: false,
    isImageType: false,
  }

  handleClick = (isImageType) => {
    this.setState({ openModal: true, isImageType });
  }

  closeModal = () => {
    this.setState({ openModal: false });
  }

  renderModal() {
    const { src } = this.props;
    const { openModal, isImageType } = this.state;
    const content = isImageType ? this.renderModalImage() : this.renderModalVideo();

    return (
      <SimpleModal
        open={openModal}
        handleClose={this.closeModal}
      >
        {content}
        <a className={styles.linkText} href={src} target='_blank' rel='noreferrer'>Open image link</a>
      </SimpleModal>
    )
  }

  renderModalVideo() {
    const { src, type } = this.props;

    return (
      <video width="500" height="500" controls>
        <source src={src} type={type} />
      </video>
    )
  }

  renderModalImage() {
    const { src } = this.props;

    return (
      <img className={styles.largeImage} src={src} alt='modal'/>
    )
  }

  renderSmallVideo() {
    const { src, type } = this.props;

    return (
      <video width="100" height="100">
        <source src={src} type={type} />
      </video>
    )
  }

  renderSmallImage() {
    const { src } = this.props;

    return (
      <img className={styles.smallImage} src={src} alt='small' />
    )
  }

  render() {
    const { type } = this.props;
    const { openModal } = this.state;

    const isImageType =  /jpg|jpeg|gif|png/i.test(type);
    const content = isImageType ? this.renderSmallImage() : this.renderSmallVideo();

    return (
      <div className={styles.container}>
        {openModal && this.renderModal()}
        <div onClick={() => this.handleClick(isImageType)}>
          {content}
        </div>
      </div>
    )
  }
}
