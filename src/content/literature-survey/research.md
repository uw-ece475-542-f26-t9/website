---
title: Literature Survey
---

## Paper 1:

Reviewer: James Lee

"Computation and Evaluation of Features of Surface Electromyogram to Identify the Force of Muscle Contraction and Muscle Fatigue"

### Summary

This paper explores which features can be extracted from surface electromyography (sEMG) signals to understand muscle contraction force and muscle fatigue. The researchers collected EMG data from 35 participants performing isometric contractions at 50%, 75%, and 100% of their maximum voluntary contraction (MVC). They compared six EMG features, including RMS, NRMS, MDF, WL, NSM5, and IIS index. For example, RMS is used to measure the amplitude of EMG signals, while MDF describes the frequency distribution of the signals. The researchers used ANOVA and linear regression to study how these features were related to muscle force, fatigue, and differences between participants. The results showed that NSM5 had the strongest linear relationship with muscle contraction force (R² = 0.96), while IIS index had the most significant relationship with muscle fatigue (p < 0.01). The study also found no statistically significant differences between participants for NSM5 and IIS index. For our project, this paper helps us understand which EMG features may be useful for analyzing muscle activity and fatigue. Instead of only using raw EMG signals, we can also extract features such as RMS and evaluate whether NSM5 or IIS index can be used with our sensor setup. We plan to investigate whether these features can help our machine learning model predict Repetitions in Reserve (RIR), which represents how many more repetitions a person can complete before muscular failure.

### Citation

Arjunan SP, Kumar DK, Naik G. Computation and evaluation of features of surface electromyogram to identify the force of muscle contraction and muscle fatigue. Biomed Res Int. 2014;2014:197960. doi: 10.1155/2014/197960. Epub 2014 Jun 4. PMID: 24995275; PMCID: PMC4065755.

## Paper 2

Reviewer: Milo Ridenour

"Surface electromyography based muscle fatigue detection using high-resolution time-frequency methods and machine learning algorithms"

### Summary

This paper discusses the introduction of high-resolution time-frequency methods
for surface electromyography, where they were previously developed and utilized
for electroencephalography and electrocardiography. While these high-resolution
methods improve tracking of frequency changes within a time window, our project
cares more about frequency from one window to another. Given that high-resolution
methods are more computationally expensive, particularly the bilinear distributions
the paper demonstrates (B-Distribution and extended modified B-Distribution),
they aren't likely to work well for us on a microcontroller. Therefore, the
relevant area of this paper lies in the findings on feature selection, experimental
procedure, and classifiers. In pre-processing, they identified rep peaks with a
moving-average RMS and expand a +/- 250ms window on either side. This will help
us better locate the peak of muscle activity in a rep instead of relying solely
on IMU data. They applied a 10-400Hz band pass filter, which aligns generally with
our prior expectations. Across time-frequency methods, median and mean
frequency drop sharply with fatigue (between 26-40% from first to last rep), and
kurtosis, skewness, and SVD entropy are consistently statistically significant.
The high percentage difference in mean frequency from start to finish bodes well
for being able to detect a discernable change across individual reps and
predict the onset of fatigue. Additionally, they were able to achieve approximately
90% accuracy classifying fatigue with small models that we could run on a
microcontroller (Naive Bayes and polynomial SVM).

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
