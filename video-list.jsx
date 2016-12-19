import React from 'react';

class VideoList extends React.Component {
    render() {
        let rows = [];
        this.props.results.forEarch((video) => {
            rows.push(<VideoInfo video={video} key={video.name} />)
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Results:</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}
