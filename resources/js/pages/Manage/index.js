import React, { useState } from 'react'
import WithHeaderLayout from '../../layouts/WithHeaderLayout';
import { fileQuery } from '../../services/common';
import { useHistory } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import { DotLoader } from 'react-spinners';

const Manage = () => {

    let history = useHistory();

    const [resource, setResource] = useState(null);
    const [src, setSrc] = useState(null);

    const [isUploading, setUploading] = useState(false);

    const handleResource = (event) => {
        const file = event.target.files[0];
        setResource(file);

        var reader = new FileReader();

        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setSrc(reader.result);
            console.log(resource !== null ? resource.type : null)
        }.bind(this);
    }

    const uploadResource = (event) => {

        setUploading(true);

        event.preventDefault();

        let formData = new FormData();
        formData.append('file', resource, resource.name);

        fileQuery("/upload", formData)
            .then(res => {
                if (res) {
                    console.log(res);
                    history.go(0);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <LoadingOverlay
            active={isUploading}
            spinner={<DotLoader />}
            text='Uploading...'
            className="w-full"
        >
            <WithHeaderLayout>
                <div className="w-full rounded-lg shadow-lg mb-8">
                    <p className="pl-10 py-4 bg-customPrimary text-white flex items-center rounded-t-lg text-2xl font-custom-bold">Upload Image</p>
                    <div className="w-full p-10">
                        <form onSubmit={uploadResource} className="flex-none sm:flex items-center sm:justify-between text-center">
                            <input type="file" onChange={handleResource} accept="image/*, video/*" className="py-8 sm:py-0" />
                            <button type="submit" className="bg-customYellow rounded-lg px-4 py-2 text-xl hover:bg-customLightYellow">Upload</button>
                        </form>
                    </div>
                    {src !== null && resource.type.indexOf('image') >= 0 &&
                        <div className="w-full p-4">
                            <img src={src} alt="image" className="mx-auto border-2 border-blue-400" />
                        </div>
                    }
                    {src !== null && resource.type.indexOf('video') >= 0 &&
                        <div className="w-full p-4">
                            <video key={src} className="mx-auto border-2 border-blue-200" autoPlay controls>
                                <source src={src} type="video/mp4"></source>
                            </video>
                        </div>
                    }
                </div>
            </WithHeaderLayout>
        </LoadingOverlay>
    )
}

export default Manage;