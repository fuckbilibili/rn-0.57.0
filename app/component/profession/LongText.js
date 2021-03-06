import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import LinkBar from '../base/LinkBar';
import PropTypes from 'prop-types';
import { wrapText } from '../../utils/functions';

export default class LongText extends PureComponent {
    static propTypes = {
        readMore:PropTypes.bool,
        shouLine:PropTypes.number,
        text: PropTypes.string,
        style: PropTypes.any
    };

    static defaultProps = {
        readMore:false,
        shouLine:3,
    };

    constructor(props) {
        super(props);
        this.state = {
            readMore: props.readMore
        };
        this._handleReadMore = this._handleReadMore.bind(this);
    }

    _handleReadMore() {
        this.setState({
            readMore:!this.state.readMore
        })
    };

    render () {
        const { text,style,shouLine } = this.props;

        const { readMore } = this.state;

        return (
            <View
                // padder
            >
                <Text
                    style={[styles.text,style]}
                    includeFontPadding={true}
                    numberOfLines={(readMore) ? 0: shouLine}
                    ellipsizeMode="tail"
                >
                    {wrapText(text)}
                </Text>
                <LinkBar
                    title={(readMore) ? "收起":"展开"}
                    transparent
                    onPress={this._handleReadMore}
                    btnStyle={styles.button}
                    titleStyle={styles.buttonText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        paddingHorizontal:10
    },
    button:{
        height:30,
    },
    buttonText:{
        color:BaseColor.skayBlue
    }
});