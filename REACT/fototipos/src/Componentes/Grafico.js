import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import ReactEcharts from 'echarts-for-react';

export default function Grafico(props) {
    const option = {
        title: {
            text: 'Resultados de los fototipos de IES Mar de Alborán',
            textAlign: "center",
            left: '50%',
            textStyle: {
                fontSize: 15, // Ajusta el tamaño del texto según tus necesidades
            }
        },
        tooltip: {},
        xAxis: {
            data: ['Fototipo I', 'Fototipo II', 'Fototipo III', 'Fototipo IV', 'Fototipo V', 'Fototipo VI']
        },
        yAxis: {},
        series: [
            {
                name: 'Respuestas',
                type: 'bar',
                data: props.data,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            const colorList = ['#F2E7D2', '#F79EB1', '#D97C90', '#AE8FBA', '#4C5E91', '#473469'];
                            return colorList[params.dataIndex];
                        }
                    }
                }
            }
        ]
    };

    return (
        <ReactEcharts
            option={option}
            style={{ height: '400px', width: '100%', marginTop: "2rem" }}
            notMerge={true}
            lazyUpdate={true}
        />
    );

}