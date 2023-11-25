import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    return (
      <section class={css.statistics}>
        {title && <h2 class={css.title}>{title}</h2>}

        <ul class={css.statlist}>
                {stats.map(item => (
                    <li key={item.id} class={css.item}>
                        <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{ item.percentage}%</span>
                    </li>
                ))}
        </ul>
      </section>
    );
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf({
            id: PropTypes.string.isRequired,
            label: PropTypes.string,
            percentage: PropTypes.number,
        },
    ),
};