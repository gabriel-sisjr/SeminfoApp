import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';

import api from "../../services/api";

export default function Settings({ navigation }) {
    const [repos, setRepos] = useState([])
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
        CarregarRepos();

        return () => setRepos([]);
    }, [])

    async function CarregarRepos() {
        const user = navigation.getParam('user');

        try {
            const resposta = await api.get(`/${user}/repos`);

            if (resposta.data)
                setRepos(resposta.data);

            setCarregado(true);
        } catch (err) {
            if (err.message.includes('404')) {
                setRepos(undefined);
                setCarregado(true);
            }
        }

    }

    function RenderizarItens({ item }) {
        return (
            <View style={{
                backgroundColor: "#FFF",
                borderWidth: 1,
                borderColor: "#DDD",
                borderRadius: 5,
                padding: 20,
                marginBottom: 20
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333"
                }}>
                    {item.name}
                </Text>
                <Text style={{
                    fontSize: 16,
                    color: "#999",
                    marginTop: 5,
                    marginBottom: 2,
                    lineHeight: 24
                }}>
                    {item.description}
                </Text>
                <TouchableOpacity style={{
                    height: 42,
                    borderRadius: 5,
                    backgroundColor: "#0290bf",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 3
                }}
                    onPress={() => {
                        navigation.navigate('RepoById', { item });
                    }}
                >
                    <Text style={{
                        fontSize: 16,
                        color: '#FFF',
                        fontWeight: "bold"
                    }}>
                        Ver Detalhes
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {!carregado ? (
                <ActivityIndicator size="large" />
            ) : (
                    <FlatList
                        data={repos}
                        style={{ paddingVertical: 20 }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={item => RenderizarItens(item)}
                        ListEmptyComponent={(
                            <>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "#333",
                                    marginBottom: 10,
                                    marginTop: 15
                                }}>Usuario Inexistente!!</Text>
                                <TouchableOpacity style={{
                                    height: 42,
                                    borderRadius: 5,
                                    backgroundColor: "#DA552F",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                    onPress={() => navigation.navigate('Home')}
                                >
                                    <Text style={{
                                        fontSize: 20, fontWeight: 'bold',
                                        color: '#FFF'
                                    }}>Voltar</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    />)
            }
        </SafeAreaView>
    );
}
