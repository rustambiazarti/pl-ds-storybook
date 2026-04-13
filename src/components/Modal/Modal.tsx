import React, { useEffect, useCallback } from 'react';
import { CloseIcon, ArrowLeftIcon } from '../../assets/icons';
import styles from './Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: 'popup' | 'dialog';
  adaptive?: 'desktop' | 'touch';
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showCaption?: boolean;
  captionText?: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = 'Welcome',
  subtitle = 'Something beautiful is about to happen. Your next goosebumps moment is just one step away.',
  children,
  variant = 'popup',
  adaptive = 'desktop',
  primaryButtonText = 'Button',
  secondaryButtonText = 'Button',
  onPrimaryClick,
  onSecondaryClick,
  showBackButton = true,
  showCloseButton = true,
  showCaption = false,
  captionText,
  className,
}) => {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isTouch = adaptive === 'touch';
  const isDialog = variant === 'dialog';
  const isPopup = variant === 'popup';
  const isBottomSheet = isTouch && isPopup;

  const overlayClasses = [
    styles.overlay,
    isTouch ? styles.bottomSheet : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const modalClasses = [
    styles.modal,
    isDialog ? styles.dialog : '',
    isPopup && !isTouch ? styles.popup : '',
    isBottomSheet ? styles.bottomSheet : '',
  ]
    .filter(Boolean)
    .join(' ');

  const renderHeader = () => {
    if (isTouch) {
      return (
        <>
          <div className={styles.pullIndicator}>
            <div className={styles.pullGlyph} />
          </div>
          <div className={`${styles.header} ${styles.touchHeader}`}>
            <div className={styles.titleRow}>
              <div className={styles.title}>{title}</div>
              {showCloseButton && (
                <button
                  className={styles.closeButton}
                  onClick={onClose}
                  aria-label="Close"
                >
                  <CloseIcon size={24} />
                </button>
              )}
            </div>
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          </div>
        </>
      );
    }

    // Desktop
    return (
      <>
        {isPopup && (
          <div className={styles.navbar}>
            {showBackButton && (
              <button className={styles.navButton} aria-label="Back">
                <ArrowLeftIcon size={24} />
              </button>
            )}
            <div className={styles.navSpacer} />
            {showCloseButton && (
              <button
                className={styles.navButton}
                onClick={onClose}
                aria-label="Close"
              >
                <CloseIcon size={24} />
              </button>
            )}
          </div>
        )}
        <div className={styles.header}>
          {isDialog ? (
            <>
              <div className={styles.pullIndicator}>
                <div className={styles.pullGlyph} />
              </div>
              <div className={styles.titleRow}>
                <div className={styles.title}>{title}</div>
                {showCloseButton && (
                  <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close"
                  >
                    <CloseIcon size={24} />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className={styles.title}>{title}</div>
          )}
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      </>
    );
  };

  const renderFooter = () => (
    <div className={styles.footer}>
      <div className={styles.buttonsGroup}>
        {secondaryButtonText && (
          <button
            className={styles.secondaryButton}
            onClick={onSecondaryClick}
          >
            {secondaryButtonText}
          </button>
        )}
        {primaryButtonText && (
          <button className={styles.primaryButton} onClick={onPrimaryClick}>
            {primaryButtonText}
          </button>
        )}
      </div>
      {showCaption && captionText && (
        <div className={styles.caption}>{captionText}</div>
      )}
    </div>
  );

  return (
    <div className={overlayClasses} onClick={handleOverlayClick}>
      <div className={modalClasses} role="dialog" aria-modal="true">
        {renderHeader()}
        {isPopup && children && (
          <div
            className={`${styles.content} ${isTouch ? styles.touchContent : ''}`}
          >
            {children}
          </div>
        )}
        {renderFooter()}
      </div>
    </div>
  );
};
