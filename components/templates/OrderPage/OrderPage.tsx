import { yandexJSAPI } from '@/app/constants/app.constants';
import MainLayout from '@/components/layouts/MainLayout';
import Button from '@/components/ui/button/Button';
import { Input, Modal, ModalBody, ModalContent, ModalFooter } from '@nextui-org/react';
import { Map, Placemark, Polygon, YMaps } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Импортируем иконку маркера

const OrderPage = () => {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [tempAddress, setTempAddress] = useState('');
    const [markerCoords, setMarkerCoords] = useState([59.81, 30.08]);

    // Функция для обратного геокодирования и извлечения нужной части адреса
    const getAddressFromCoordinates = async (coords: any[]) => {
        try {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${yandexJSAPI}&format=json&geocode=${coords[1]},${coords[0]}`);
            const data = await response.json();

            // Получаем полный адрес
            const fullAddress = data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;

            // Разбиваем адрес на части
            const addressParts = fullAddress.split(', ');

            // Извлекаем нужные части адреса (городской поселок, улица и дом)
            const city = addressParts[4];
            const street = addressParts[5] || '-';
            const house = addressParts[6] || '-';

            if (city !== 'городской посёлок Новоселье') {
                toast.error('Доставка осуществляется только по гп. Новоселье');
                return null;
            }

            return `${city}, ${street}, ${house}`;
        } catch (error) {
            console.error('Error fetching address:', error);
            return null; // Возвращаем null в случае ошибки
        }
    };

    const handleMapClick = async (e: { get: (arg0: string) => any; }) => {
        const coords = e.get('coords');

        // Получаем адрес по координатам
        const address = await getAddressFromCoordinates(coords);
        if (address !== null) {
            setTempAddress(`${address}`);
            setMarkerCoords(coords);
        }
    };

    const handleOpenMap = () => {
        setModalVisible(true);
    };

    const handleSaveAddress = () => {
        setSelectedAddress(tempAddress);
        setModalVisible(false);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <MainLayout>
            <section>
                <h1>Оформление заказа</h1>
                <div className='d-flex flex-row'>
                    <div className='w-2/4'>
                        <div className=' d-flex flex-row items-center relative'>
                            <Input
                                value={selectedAddress}
                                disabled
                                label="Адрес доставки"
                                className='w-5/6'
                                isRequired
                                classNames={{
                                    innerWrapper: "bg-transparent pt-4",
                                    input: "bg-transparent",
                                }}
                                endContent={
                                    <FaMapMarkerAlt
                                    className=' text-blue-500 cursor-pointer absolute bottom-4'
                                    size={24}
                                    fill='orange'
                                    onClick={handleOpenMap}
                                />
                                }
                            />
                            
                        </div>
                        <div className='mt-5 flex-row justify-between w-5/6'>
                            <Input type='text' label="Квартира" className="input-custom w-36" isRequired isClearable />
                            <Input type='text' label="Подъезд" className="input-custom w-36" />
                            <Input type='text' label="Этаж" className="input-custom w-36" />
                        </div>
                </div>
                <div className='w-2/4'>
                        <h2>Общая стоимость заказа - </h2>
                </div>
                </div>
                <Modal isOpen={modalVisible} onOpenChange={handleCloseModal} size='full' classNames={{
                    body: "text-black-500",
                    header: "text-black-500",
                    footer: "d-flex justify-center",
                }}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalBody>
                                    <div>
                                        <p className='text-black text-xl'><strong>Текущий адрес:</strong> {tempAddress}</p>
                                    </div>
                                    <div style={{ height: '80vh' }}>
                                        <YMaps query={{ apikey: yandexJSAPI }}>
                                            <Map
                                                defaultState={{ center: [59.81, 30.08], zoom: 14 }}
                                                style={{ width: '100%', height: '100%' }}
                                                onClick={handleMapClick}
                                            >
                                                <Polygon
                                                    geometry={[[
                                                        [59.816363323874306, 30.049340797713597],
                                                        [59.80667909171499, 30.04771001463253],
                                                        [59.80161968721998, 30.059554649642294],
                                                        [59.801360209813154, 30.07663495664913],
                                                        [59.80226837187317, 30.085904671004595],
                                                        [59.80317650911478, 30.095603538802454],
                                                        [59.80438732016457, 30.105903221419652],
                                                        [59.8089274686685, 30.111053062728224],
                                                        [59.81333730460038, 30.110366417220412],
                                                        [59.8144612867991, 30.10487325315792],
                                                        [59.815758142074614, 30.080154014876662],
                                                        [59.816363323874306, 30.066335274031935],
                                                        [59.81653623093453, 30.059554649642294],
                                                        [59.816363323874306, 30.049340797713597]
                                                    ]]}
                                                    options={{
                                                        fillColor: 'rgba(160, 193, 0, 0.3)', // Прозрачный цвет заливки
                                                        strokeColor: '#ed4543',
                                                        strokeWidth: 5
                                                    }}
                                                    onClick={handleMapClick}
                                                />
                                                <Placemark 
                                                    geometry={markerCoords} 
                                                />
                                            </Map>
                                        </YMaps>
                                    </div>
                                </ModalBody>
                                <ModalFooter >
                                    <Button color="warning" onClick={handleSaveAddress}>
                                        <span className='text-white'>Сохранить адрес</span>
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </section>
        </MainLayout>
    );
};

export default OrderPage;
