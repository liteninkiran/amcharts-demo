import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {

    ngOnInit(): void {
        this.createChart();
    }

    public createChart() {
        // Create root element
        const root = am5.Root.new('chartdiv');

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root),
        ]);

        // Create chart
        const chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: 'panX',
            wheelY: 'zoomX',
            pinchZoomX: true,
        }));

        // Add cursor
        const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {
            behavior: 'none'
        }));
        cursor.lineY.set('visible', false);

        // Generate random data
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        let value = 100;

        function generateData() {
            value = Math.round(Math.random() * 10 - 5 + value);
            am5.time.add(date, 'day', 1);
            return { date: date.getTime(), value: value };
        }

        function generateDatas(count: number) {
            const data = [];
            for (var i = 0; i < count; ++i) {
                data.push(generateData());
            }
            return data;
        }

        // Create axes
        const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            baseInterval: { timeUnit: 'day', count: 1 },
            renderer: am5xy.AxisRendererX.new(root, {}),
            tooltip: am5.Tooltip.new(root, {}),
        }));

        const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {}),
        }));

        // Add series
        const series = chart.series.push(am5xy.LineSeries.new(root, {
            name: 'Series',
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            valueXField: 'date',
            tooltip: am5.Tooltip.new(root, {
                labelText: '{valueY}',
            }),
        }));

        // Add scrollbar
        const scrollbar = chart.set('scrollbarX', am5xy.XYChartScrollbar.new(root, {
            orientation: 'horizontal',
            height: 60,
        }));

        const sbDateAxis = scrollbar.chart.xAxes.push(am5xy.DateAxis.new(root, {
            baseInterval: {
                timeUnit: 'day',
                count: 1,
            },
            renderer: am5xy.AxisRendererX.new(root, {}),
        }));

        const sbValueAxis = scrollbar.chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );

        const sbSeries = scrollbar.chart.series.push(am5xy.LineSeries.new(root, {
            valueYField: 'value',
            valueXField: 'date',
            xAxis: sbDateAxis,
            yAxis: sbValueAxis,
        }));

        const data = generateDatas(2000);
        series.data.setAll(data);
        sbSeries.data.setAll(data);

        // Make stuff animate on load
        series.appear(1000);
        chart.appear(1000, 100);
    }
}
