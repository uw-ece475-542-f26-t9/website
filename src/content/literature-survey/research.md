# Literature Survey

## Paper 1

### Citation

P.A. Karthick, Diptasree Maitra Ghosh, S. Ramakrishnan,
Surface electromyography based muscle fatigue detection using high-resolution time-frequency methods and machine learning algorithms,
Computer Methods and Programs in Biomedicine,
Volume 154,
2018,
Pages 45-56,
ISSN 0169-2607,
https://doi.org/10.1016/j.cmpb.2017.10.024.
(https://www.sciencedirect.com/science/article/pii/S016926071730408X)

### Summary

This paper discusses the introduction of high-resolution time-frequency methods
for surface elecromyography, where they were previously developed and utilized
for electroencephalography and electrocardiography. While these high-resolution
methods improve tracking of frequency changes within a time window, our project
cares more about frequency from one window to another. Given that high-resolution
methods are more computationally expensive, particularly the bilinear distributions
the paper demonstrates (B-Distribution and extended modified B-Distribution),
they aren'y likely to work well for us on a microcontroller. Therefore, the
relevenat area of this paper lies in the findings on feature selection, experimental
proceedure, and classifiers.

In pre-processing, they identified rep peaks with a
moving-average RMS and expand a +/- 250ms window on either side. This will help
us better locate the peak of muscle activity in a rep instead of relying soley
on IMU data. They applied a 10-400Hz band pass filter, which aligns generally with
our prior expectations. Across time-frequency methods, median and mean
frequency drop sharply with fatigue (between 26-40% from first to last rep), and
kurtosis, skewness, and SVD entropy are consistently statistically significant.
The high percentage difference in mean frequency from start to finish bodes well
for being able to detect a discernable change across individual reps and
predict the onset of fatigue. Additionally, they were able to acheive approximately
90% accuracy classifying fatigue with small models that we could run on a
mircocontroller (Naive Bayes and polynomial SVM).
