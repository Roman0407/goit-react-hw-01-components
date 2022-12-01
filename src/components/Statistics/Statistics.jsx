import PropTypes from 'prop-types';
import { StatisticsHeading, StatisticsItem, StatisticsList, StatisticsSection } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return <StatisticsSection>
        {title && <StatisticsHeading>{title}</StatisticsHeading>}
        <StatisticsList>
            {stats.map(item => <StatisticsItem key={item.id} style={{ backgroundColor: randomColor() }}>
                <span>{item.label}</span>
                <span>{item.percentage}%</span>
            </StatisticsItem>)}
        </StatisticsList>
    </StatisticsSection>
}
const randomColor = () => ('#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase());

// Пропы
Statistics.propeType = {
    title: PropTypes.bool,
    stats: PropTypes.array.isRequired,
}