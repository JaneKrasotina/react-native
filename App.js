import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, Share } from 'react-native';
import Swiper from 'react-native-swiper';

const data = [
    { id: 1, imageUrl: require('./images/image1.jpg'), description: 'Description 1' },
    { id: 2, imageUrl: require('./images/image2.jpg'), description: 'Description 2' },
    // Додайте інші об'єкти зображень за аналогією
];

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Share message here',
                url: 'URL to share',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared with activity type:', result.activityType);
                } else {
                    console.log('Shared');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Dismissed');
            }
        } catch (error) {
            console.error('Error sharing:', error.message);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>Open Swiper Modal</Text>
            </TouchableOpacity>
            <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <Swiper
                    loop={false}
                    index={activeIndex}
                    onIndexChanged={(index) => setActiveIndex(index)}
                    showsButtons={false}
                    showsPagination={false}
                    style={{ flex: 1 }}
                >
                    {data.map((item, index) => (
                        <View key={item.id}>
                            <Image source={item.imageUrl} style={{ width: 300, height: 300 }} />
                            <Text>{item.description}</Text>
                        </View>
                    ))}
                </Swiper>
                <TouchableOpacity onPress={handleShare}>
                    <Text>Share</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    {data.map((item, index) => (
                        <View key={item.id} style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: index === activeIndex ? 'blue' : 'gray', marginHorizontal: 5 }} />
                    ))}
                </View>
            </Modal>
        </View>
    );
};

export default App;