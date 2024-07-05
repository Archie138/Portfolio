export const Projects = () => {
    return (
        <>
            <div className="mt-[5%] text-[25px] ml-[5%] font-bold pt-[6%]"> PROJECTS </div>
            <div className="relative overflow-hidden wrap ml-[5%] mr-[5%] pb-[10%]">
                
                <div className="ml-[10%] grid gap-4 md:grid-cols-2"> 
                    <div className="max-w-sm p-6 rounded-lg shadow-xl mr-[10%] mt-[5%] hover:shadow-inner flex flex-col">
                        <p className="font-bold mb-[3%]"> Traffic Sign Detection </p>
                        <p className="mb-[5%]"> 
                            Utilized data visualization and preprocessing techniques like Canny Edge Detection, 
                            Image Segmentation, and Data Augmentation to optimize model performance. 
                            Improved accuracy for algorithms including Gaussian Naïve Bayes, K-means, Hierarchical,
                            DBSCAN, GMM, Fuzzy C Means, PCA, t-SNE, Decision Trees, Random Forest, Logistic Regression, 
                            Linear Perceptron, MLP, and CNN.
                        </p>
                        <div className="flex-grow"></div>
                        <form action="https://github.com/Archie138/Traffic-Sign-Detection" target="_blank">
                            <button
                                className="inline-flex items-center px-4 py-2 mt-auto mb-0 font-bold bg-pink-200 rounded hover:bg-pink-400 w-[40%]"
                                type="submit"
                            >
                                Check it out
                            </button>
                        </form>
                    </div>

                    <div className="max-w-sm p-6 rounded-lg shadow-xl mr-[10%] mt-[5%] hover:shadow-inner flex flex-col">
                        <p className="font-bold mb-[3%]"> Sentiment Analysis - Squid Game </p>
                        <p className="mb-[5%]"> 
                            Utilizing the YouTube API, retrieved comments from videos pertinent to a specific topic and conducted sentiment 
                            analysis on the gathered data. Employed pipelines including CountVectorizer and TF-IDF to facilitate this analytical 
                            process.
                        </p>
                        <div className="flex-grow"></div>
                        <form action="https://github.com/Archie138/Youtube-Sentiment-Analysis" target="_blank">
                            <button
                                className="inline-flex items-center px-4 py-2 mt-auto mb-0 font-bold bg-pink-200 rounded hover:bg-pink-400 w-[40%]"
                                type="submit"
                            >
                                Check it out
                            </button>
                        </form>
                    </div>
                </div>

                <div className="ml-[10%] grid gap-4 md:grid-cols-2"> 
                    <div className="max-w-sm p-6 rounded-lg shadow-xl mr-[10%] mt-[5%] hover:shadow-inner flex flex-col">
                        <p className="font-bold mb-[3%]"> Fall Detection through Wearable Devices </p>
                        <p className="mb-[5%]"> 
                            Evaluated various machine learning and deep learning algorithms, 
                            namely the HMM, LSTM and a hybrid HMM-LSTM model, 
                            for accurate and effective detection of falls using the publicly available dataset, 
                            FallAllD, that contains accelerometer, gyroscope, magnetometer and barometer data which was 
                            gathered from wearable devices. 
                        </p>
                        <div className="flex-grow"></div>
                        <form action="https://github.com/Archie138/F20PA-Fall-Detection" target="_blank">
                            <button
                                className="inline-flex items-center px-4 py-2 mt-auto mb-0 font-bold bg-pink-200 rounded hover:bg-pink-400 w-[40%]"
                                type="submit"
                            >
                                Check it out
                            </button>
                        </form>
                    </div>

                    <div className="max-w-sm p-6 rounded-lg shadow-xl mr-[10%] mt-[5%] hover:shadow-inner flex flex-col">
                        <p className="font-bold mb-[3%]"> Amazon Reviews Rating Detection </p>
                        <p className="mb-[5%]"> 
                            We assess the impact of n-gram versus unigram features and use different vector space representations
                            like binary, frequency count, TF-IDF, and word embeddings to categorize reviews. 
                            Text processing methods, including tokenization, stemming, normalization, and stop-word removal, 
                            were applied to evaluate user reviews.
                        </p>
                        <div className="flex-grow"></div>
                        <form action="https://github.com/Archie138/Youtube-Sentiment-Analysis" target="_blank">
                            <button
                                className="inline-flex items-center px-4 py-2 mt-auto mb-0 font-bold bg-pink-200 rounded hover:bg-pink-400 w-[40%]"
                                type="submit"
                            >
                                Check it out
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    ) 
};