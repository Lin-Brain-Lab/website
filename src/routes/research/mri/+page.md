---
title: Magnetic Resonance Imaging (MRI)
---

<script lang="ts">
    import Carousel from "$lib/components/Carousel.svelte";
</script>

# {title}

Magnetic resonance imaging (MRI) has millimeter spatial resolution and versatile contrasts. MRI has been extensively used in clinical medicine and neuroscience studies to provide structural, functional, and metabolic information. Specifically, anatomical MRI can show cortical and subcortical structures. Functional MRI (fMRI) using intrinsic hemodynamic response contrast has become a prevailing method of mapping human brain function. Magnetic resonance spectroscopy and spectroscopic imaging can quantify and delineate the spatial distribution of metabolites.

We are interested in advancing the MRI technology in order to improve its spatiotemporal resolution and sensitivity. We aim at developing a tailored combination of receiver coil array, spatial encoding magnetic fields, main magnetic field, pulse sequence, and image reconstruction algorithms in order to optimize MRI in different applications.

<Carousel images={[
    "https://linbrainlab.org/wp-content/uploads/smsini.png",
    "https://linbrainlab.org/wp-content/uploads/probes_940.png",
    "https://linbrainlab.org/wp-content/uploads/sags_shimming-817x313.png",
    "https://linbrainlab.org/wp-content/uploads/mde_coord.png",
    "https://linbrainlab.org/wp-content/uploads/rsa.png",
]} />

## Spatial encoding using nonlinear gradient coils

“[Mitigate _B_1+inhomogeneity using spatially selective RF excitation with generalized spatial encoding magnetic fields](http://140.112.148.130/wp-content/uploads/2013/07/sags_mrm2013.pdf)“, Yi-Cheng Hsu, I-Liang Chern, Wei Zhao, Borjan Gagoski, Thomas Witzel, Fa-Hsuan Lin, Magnetic Resonance in Medicine  (in press)

“[Multidimensionally encoded magnetic resonance imaging](http://140.112.148.130/wp-content/uploads/2013/06/mde_mri_mrm.pdf)“, Fa-Hsuan Lin, Magnetic Resonance in Medicine  (2013), Vol. 70, pp. 86-96

[Reconstruction of MRI data encoded by multiple nonbijective curvilinear magnetic fields](http://140.112.148.130/reprints/nonlinear_mri_mrm2012.pdf)”, Fa-Hsuan Lin, Thomas Witzel, Gerrit Schultz, Daniel Gallichan, Wen-Jui Kuo, Fu-Nien Wang, Juergen Hennig, Maxim Zaitsev, John W. Belliveau, Magnetic Resonance in Medicine , (2012), Vol. 68 (4), pp. 1145-1156

## Fast functional MRI: inverse imaging

“Simultaneous multi-slice inverse imaging of the human brain”, Yi-Cheng Hsu, Ying-Hua Chu, Shang-Yueh Tsai, Wen-Jui Kuo, Chun-Yuan Chang, Fa-Hsuan Lin, [_S__cientific Reports,_ (7), Article number: 17019, doi: 10.1038/s41598-017-16976-0](https://www.nature.com/articles/s41598-017-16976-0)

“[Ultrafast inverse imaging techniques for fMRI](http://140.112.148.130/reprints/ini_review_ni2012.pdf)“, Fa-Hsuan Lin, Kevin Wen-Kai Tsai, Ying-Hua Chu, Thomas Witzel, Aapo Nummenmaa, Tommi Raij, Jyrki Ahveninen, John W. Belliveau, NeuroImage (2012), Vol. 62 (2), pp. 699-705

“[Multi-projection magnetic resonance inverse imaging of the human visuomotor system](http://140.112.148.130/reprints/mini_ni2012.pdf)“, Kevin Wen-Kai Tsai, Aapo Nummenmaa, Thomas Witzel, Wei-Tang Chang, Fa-Hsuan Lin, NeuroImage (2012), Vol. 61 (1), 304-313

[“Physiological noise reduction using volumetric functional magnetic resonance inverse imaging”](http://140.112.148.130/reprints/ini_physiological_noise_hbm2012.pdf), Fa-Hsuan Lin, Aapo Nummenmaa, Thomas Witzel, Jonathan Polimeni, Thomas A Zeffiro, Fu-Nien Wang, John W. Belliveau, Human Brain Mapping (2012) Vol 33 (12), pp. 2815-30.

“[K-space reconstruction of magnetic resonance inverse imaging (K-InI) of human visuomotor systems](http://140.112.148.130/reprints/kini_ni2010.pdf)”, Fa-Hsuan Lin, Thomas Witzel, Wei-Tang Chang, Kevin Wen-Kai Tsai, Yen-Hsiang Wang, Wen-Jui Kuo, John W. Belliveau, NeuroImage, (2010), Vol. 49 (4), 3086-3098

“[Event-related single-shot volumetric functional magnetic resonance inverse imaging of visual pocessing](http://140.112.148.130/reprints/ini3d_ni2008.pdf)“, Fa-Hsuan Lin, Thomas Witzel, Joseph B. Mandeville, Jonathan R. Polimeni, Thomas A. Zeffiro, Douglas N. Greve, Graham Wiggins, Lawrence L. Wald, John W. Belliveau, NeuroImage, (2008), Vol 42 (1), pp. 230-247

## Ultra-low field MRI

“[Suppressing multi-channel ultra-low-field MRI measurement noise using data consistency and image sparsity](http://140.112.148.130/reprints/megmri_dataconsistency_plosone2013.pdf)“, Fa-Hsuan Lin, Panu T. Vesanen, Yi-Cheng Hsu, Jaakko O. Nieminen, Koos C.J. Zevenhoven, Juhani Dabek, Lauri T. Parkkonen, Juha Simola, Antti I. Ahonen, Risto J. Ilmoniemi, [PLoS ONE 8(4): e61652. doi:10.1371/journal.pone.0061652](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0061652)

“[Noise amplification in parallel whole-head ultra-low-field magnetic resonance imaging using 306 detectors](http://140.112.148.130/reprints/megmri_306_noise_amplfication_mrm2013.pdf)“, Fa-Hsuan Lin, Panu T. Vesanen, Jaakko O. Nieminen, Yi-Cheng Hsu, Koos C.J.  Zevenhoven, Juhani Dabek, Lauri T. Parkkonen, Andrey V. Zhdanov, Risto J. Ilmoniemi, Magnetic Resonance in Medicine (2013), Vol. 70, pp. 595-600

“[Efficient concomitant and remanence field artifact reduction in ultra-low-field MRI using a frequency-space formulation](http://35.203.18.157/wp-content/uploads/reprint_ulfmri_fx_mrm2014.pdf)“, Yi-Cheng Hsu, Panu T. Vesanen, Jaakko O. Nieminen, Koos C.J. Zevenhoven, Juhani Dabek, Lauri Parkkonen, I-Liang Chern, Risto J. Ilmoniemi, Fa-Hsuan Lin, Magnetic Resonance in Medicine (2014), Vol. 71 (3), pp. 955-965