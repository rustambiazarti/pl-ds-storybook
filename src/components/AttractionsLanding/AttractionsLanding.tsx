import React from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Tag } from '../Tag';
import { Logo } from '../Logo';
import { Divider } from '../Divider';
import styles from './AttractionsLanding.module.css';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Attraction {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  rating: number;
  reviews: number;
  tags: string[];
  badge?: string;
  badgeVariant?: 'success' | 'warning' | 'primary' | 'error';
}

const attractions: Attraction[] = [
  {
    id: 1,
    title: 'Sky Wheel Dubai',
    description: 'Крупнейшее колесо обозрения в мире с панорамным видом на город и залив.',
    price: 150,
    currency: 'AED',
    rating: 4.8,
    reviews: 2340,
    tags: ['Семейный', 'Панорама'],
    badge: 'Хит',
    badgeVariant: 'success',
  },
  {
    id: 2,
    title: 'Aquaventure Waterpark',
    description: 'Аквапарк мирового класса с горками, ленивой рекой и частным пляжем.',
    price: 299,
    currency: 'AED',
    rating: 4.7,
    reviews: 5120,
    tags: ['Водный', 'Экстрим'],
    badge: 'Популярное',
    badgeVariant: 'primary',
  },
  {
    id: 3,
    title: 'Desert Safari',
    description: 'Приключение в пустыне: дюнбашинг, ужин под звёздами и шоу.',
    price: 220,
    currency: 'AED',
    rating: 4.9,
    reviews: 1870,
    tags: ['Природа', 'Приключение'],
  },
  {
    id: 4,
    title: 'IMG Worlds of Adventure',
    description: 'Крупнейший крытый тематический парк с зонами Marvel, Cartoon Network и не только.',
    price: 345,
    currency: 'AED',
    rating: 4.5,
    reviews: 3200,
    tags: ['Тематический', 'Семейный'],
    badge: 'Скидка 20%',
    badgeVariant: 'warning',
  },
  {
    id: 5,
    title: 'Dubai Frame',
    description: 'Архитектурная достопримечательность высотой 150 метров с прозрачным полом.',
    price: 50,
    currency: 'AED',
    rating: 4.6,
    reviews: 4100,
    tags: ['Панорама', 'Архитектура'],
  },
  {
    id: 6,
    title: 'Ski Dubai',
    description: 'Горнолыжный комплекс в пустыне: реальный снег, пингвины и 5 трасс.',
    price: 260,
    currency: 'AED',
    rating: 4.4,
    reviews: 2890,
    tags: ['Зимний', 'Экстрим'],
    badge: 'Новинка',
    badgeVariant: 'primary',
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

const StarSvg: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className={styles.starIcon}>
    <path d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.27l-3.52 1.58.67-3.93L1.3 5.14l3.94-.57z" />
  </svg>
);

const ImagePlaceholderSvg: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

const SocialSvg: React.FC<{ d: string }> = ({ d }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d={d} />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export const AttractionsLanding: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* ===== Header ===== */}
      <header className={styles.header}>
        <Logo variant="full" color="default" height={28} />

        <nav className={styles.headerNav}>
          <button className={styles.navLink}>Аттракционы</button>
          <button className={styles.navLink}>Мероприятия</button>
          <button className={styles.navLink}>Билеты</button>
          <button className={styles.navLink}>О нас</button>
        </nav>

        <div className={styles.headerActions}>
          <Button variant="ghost" size="S">Войти</Button>
          <Button variant="primary" size="S">Купить билет</Button>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <Typography variant="title-4xl" accent>
          Аттракционы Дубая
        </Typography>
        <Typography variant="body-long-base" color="secondary" className={styles.heroSubtitle}>
          Откройте для себя лучшие развлечения города — от захватывающих
          аквапарков до панорамных смотровых площадок. Бронируйте онлайн
          со скидкой до 30%.
        </Typography>
        <div className={styles.heroActions}>
          <Button variant="primary" size="M">Смотреть все</Button>
          <Button variant="secondary" size="M">Как это работает</Button>
        </div>
      </section>

      <Divider />

      {/* ===== Cards ===== */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Typography variant="title-xl">Популярные аттракционы</Typography>
          <Button variant="ghost" size="S">Показать все</Button>
        </div>

        <div className={styles.grid}>
          {attractions.map((item) => (
            <article key={item.id} className={styles.card}>
              {/* Image placeholder */}
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderIcon}>
                    <ImagePlaceholderSvg />
                  </div>
                  <Typography variant="body-short-caption" color="highlight">
                    {item.title}
                  </Typography>
                </div>
                {item.badge && (
                  <div className={styles.cardBadge}>
                    <Badge variant={item.badgeVariant} size="S">{item.badge}</Badge>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <Typography variant="title-base">{item.title}</Typography>
                <Typography variant="body-short-sm" color="secondary">
                  {item.description}
                </Typography>

                <div className={styles.cardTags}>
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className={styles.cardMeta}>
                  <span className={styles.cardPrice}>
                    {item.price}{' '}
                    <span className={styles.cardPriceCurrency}>{item.currency}</span>
                  </span>
                  <span className={styles.cardRating}>
                    <StarSvg />
                    {item.rating}
                    <Typography variant="body-short-caption" color="highlight" as="span">
                      ({item.reviews.toLocaleString()})
                    </Typography>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerGrid}>
            {/* Brand */}
            <div className={styles.footerBrand}>
              <Logo variant="full" color="white" height={24} />
              <p className={styles.footerDescription}>
                Platinumlist — ведущая платформа для бронирования билетов на мероприятия
                и аттракционы в ОАЭ и на Ближнем Востоке.
              </p>
            </div>

            {/* Column 1 */}
            <div className={styles.footerColumn}>
              <span className={styles.footerColumnTitle}>Аттракционы</span>
              <button className={styles.footerLink}>Аквапарки</button>
              <button className={styles.footerLink}>Тематические парки</button>
              <button className={styles.footerLink}>Смотровые площадки</button>
              <button className={styles.footerLink}>Экскурсии</button>
            </div>

            {/* Column 2 */}
            <div className={styles.footerColumn}>
              <span className={styles.footerColumnTitle}>Компания</span>
              <button className={styles.footerLink}>О нас</button>
              <button className={styles.footerLink}>Контакты</button>
              <button className={styles.footerLink}>Блог</button>
              <button className={styles.footerLink}>Карьера</button>
            </div>

            {/* Column 3 */}
            <div className={styles.footerColumn}>
              <span className={styles.footerColumnTitle}>Поддержка</span>
              <button className={styles.footerLink}>FAQ</button>
              <button className={styles.footerLink}>Возврат билетов</button>
              <button className={styles.footerLink}>Условия использования</button>
              <button className={styles.footerLink}>Конфиденциальность</button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={styles.footerBottom}>
            <span className={styles.footerCopy}>
              &copy; 2026 Platinumlist. Все права защищены.
            </span>
            <div className={styles.footerSocials}>
              <button className={styles.socialLink} aria-label="Instagram">
                <SocialSvg d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </button>
              <button className={styles.socialLink} aria-label="Facebook">
                <SocialSvg d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </button>
              <button className={styles.socialLink} aria-label="Twitter">
                <SocialSvg d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
