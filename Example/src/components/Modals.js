import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {COLORS, PRIMARY_COLOR} from "../utils";
import {Button, Divider, Icon, Overlay} from "react-native-elements";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";

/**
 * Show a progress modal
 *
 * @param text
 * @param isVisible
 * @param btnText
 * @param onBtnPress
 * @returns {*}
 * @constructor
 */
const ProgressModal = ({text, isVisible, btnText, onBtnPress}) => {
    return (
        <Overlay isVisible={isVisible}>
            <>
                <View style={styles.progressModalContainer}>
                    <ActivityIndicator
                        size="large"
                        color={PRIMARY_COLOR}
                    />
                    <Text style={styles.progressModalText}>
                        {text}
                    </Text>
                </View>
                {btnText && (
                    <View style={styles.progressModalBtnView}>
                        <View style={styles.progressModalBtnSubView}>
                            <Text
                                onPress={onBtnPress}
                                style={styles.progressModalBtnText}
                            >
                                {btnText}
                            </Text>
                        </View>
                    </View>
                )}
            </>
        </Overlay>
    );
};

/**
 * Display a modal
 *
 * @param title
 * @param content
 * @param isVisible
 * @param onCloseClick
 * @param leftText
 * @param rightText
 * @param onLeftClick
 * @param onRightClick
 * @returns {*}
 * @constructor
 */
const CustomModal = ({title, content, isVisible, onCloseClick, leftText, rightText, onLeftClick, onRightClick}) => {
    return (
        <Modal isVisible={isVisible} overlayStyle={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <View
                        style={{
                            position: 'absolute',
                            right: 5,
                        }}
                    >
                        <Icon
                            name={'ios-close-circle-outline'}
                            type="ionicon"
                            color={COLORS.White}
                            onPress={onCloseClick}
                        />
                    </View>
                </View>
                <Divider />
                <View style={styles.modalBody}>
                    {content}
                </View>
                <View style={styles.modalFooter}>
                    {onLeftClick && onRightClick ? (
                        <>
                            <Button
                                type="outline"
                                title={leftText}
                                onPress={onLeftClick}
                                buttonStyle={{paddingHorizontal: 20, paddingVertical: 5}}
                            />
                            <Button
                                title={rightText}
                                onPress={onRightClick}
                                buttonStyle={{paddingHorizontal: 20, paddingVertical: 5, marginHorizontal: 20, marginLeft: 40}}
                            />
                        </>
                    ) : (
                        <Button
                            title={leftText}
                            onPress={onLeftClick}
                            buttonStyle={{paddingHorizontal: 20, paddingVertical: 5, marginRight: 20}}
                        />
                    )}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    progressModalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    progressModalText: {
        // fontFamily: 'roboto',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    progressModalBtnView: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'flex-end'
    },
    progressModalBtnSubView: {
        width: 'auto'
    },
    progressModalBtnText: {
        color: PRIMARY_COLOR,
        paddingRight: 10,
        textDecorationLine: 'underline'
    },
    container: {
        backgroundColor: COLORS.White,
        padding: 0,
    },
    wrapper: {
        // maxWidth: '80%',
        backgroundColor: 'white'
    },
    modalHeader: {
        justifyContent: 'center',
        position: 'relative',
        paddingTop: 5,
        paddingBottom: 10,
        backgroundColor: COLORS["Summer Sky"],
    },
    modalTitle: {
        // fontFamily: 'roboto',
        fontSize: 18,
        textAlign: 'center',
        color: COLORS.White
    },
    modalBody: {
        paddingHorizontal: 10,
        marginVertical: 40,
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        paddingHorizontal: 10,
        paddingLeft: 30,
        marginBottom: 10,
    }
});

ProgressModal.propTypes = {
    text: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
};

export {
    ProgressModal,
    CustomModal
};
