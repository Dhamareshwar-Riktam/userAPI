import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import {
    Text,
    Heading,
    VStack,
    HStack,
    Box,
    Divider
} from 'native-base';
import moment from 'moment';


const User = ({ details }) => {
    return (
        <Box border="1" borderRadius="md">
            <VStack space="4" style={styles.card}>
                <Box px="4" style={styles.cardItem}>
                    <Image
                        source={{
                            uri: details.picture?.large,
                            width: 150,
                            height: 250
                        }}
                        style={styles.image}
                    />
                </Box>
                <Box px="4" style={styles.cardItem}>
                    <Heading>{details.name?.title} {details.name?.first} {details.name?.last}</Heading>
                </Box>
                <Box px="4" style={styles.cardItem}>
                    <Text style={styles.text}>{details.cell}</Text>
                </Box>
                <Divider my="2" _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }} />
                <Box px="4" style={styles.cardItem}>
                    <Text style={styles.text}>{details.email}</Text>
                </Box>
                <Divider my="2" _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }} />
                <Box px="4" style={styles.cardItem}>
                    <Text style={styles.text}>{details.location.street.name}</Text>
                </Box>
                <Divider my="2" _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }} />
                <Box px="4" pb="4" style={{ color: "#fff" }}>
                    <Text style={styles.text}>
                        <Text
                            style={{ color: '#EDBF69' }}>
                            Registered on:
                        </Text>
                        {moment(details.registered?.date).format('DD-MM-YYYY')}
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
};


export default User;


const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#4f8a8b',
        borderWidth: 2
    },
    cardItem: {
        backgroundColor: '#4f8a8b',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#4bd46d",
        marginTop: -50
    },
    text: {
        color: '#ccc'
    }
});